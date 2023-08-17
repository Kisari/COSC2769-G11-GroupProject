const mongoose = require("mongoose");

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

    role: {
        type: String,
        enum: ["customer", "admin", "seller"],
        default: "customer"
    }
});

module.exports = userSchema;
