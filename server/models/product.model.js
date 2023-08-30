const {mongoose, Schema} = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required'],
    },

    image: {
        type: String
    },

    stock: {
        type: Number,
        default: 0
    },

    description: String,

    price: {
        type: Number,
        required: true
    },

    dateAdded: {
        type: Date,
        default: Date.now()
    },

    categories: {
        // type: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Category'
        // }],  
        type: [String]
    },
    attributes: {
        type: Map,
        of: String
    }

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;