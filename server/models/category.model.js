const mongoose = require("mongoose");

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: String,
    
    attributes: []
})

// Create the category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category

// Missing attributes 
