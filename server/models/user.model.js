const mongoose = require("mongoose");
const userHelper = require('../helpers/user.helper');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    phone: {
        type: String,
        unique: true,
    },
    
    password: {
        type: String,
        required: true
    },
});

// Confirm user saved 
userSchema.post('save', userHelper.confirmNewUser);

// Hash password
userSchema.pre('save', userHelper.hashPassword);

// Set the login function as static
userSchema.statics = {
    login: userHelper.login,
};

const User = mongoose.model('User', userSchema);

module.exports = {User, userSchema};
