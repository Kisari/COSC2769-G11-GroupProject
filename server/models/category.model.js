const {mongoose} = require("mongoose");

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name required'],
        unique: true
    },

    description: String,
    
    attributes: [
        {
            attributeID : String,
            attributeName : String,
            attributeDescription : String
        }
    ]
    }
)

// Create the category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category

// Missing attributes 
