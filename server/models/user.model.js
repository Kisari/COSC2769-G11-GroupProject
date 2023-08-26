const mongoose = require("mongoose");
const userHelper = require('../helpers/user.helper');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true,
        lowercase: true,
        validate: {
            // Validate email pattern 
            validator: function(val) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
            },
            message: 'Please enter a valid email'
        }
    },

    phone: {
        type: String,
        unique: true,
    },
    
    password: {
        type: String,
        required: [true, 'Password required'],
        minlength: [6, 'Minimum password length is 6 characters'],
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
