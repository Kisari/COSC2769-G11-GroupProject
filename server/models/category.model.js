const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ['number', 'text'],
    }
})



// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name required'],
        unique: true
    },

    description: String,
    
    attributes: {
        type: [attributeSchema],
    },

    parent: [{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }]
});

// Create the category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

