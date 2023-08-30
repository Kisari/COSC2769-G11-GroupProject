const {mongoose} = require("mongoose");

// Define the attribute schema supporting the category
// const attributeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, 'Name required'],
//     },
//     type: String

// })

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: String,
    
    attributes: {
        type: [String]
    }
    }
)

// Create the category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

