const {mongoose} = require("mongoose");

// Define the attribute schema supporting the category
const attributeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name required'],
    },
    require: Boolean,
    type: String

})

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name required'],
        unique: true
    },

    description: String,
    
    attributes: [attributeSchema]
    }
)

// Create the category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

