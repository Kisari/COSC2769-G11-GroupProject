const {mongoose} = require("../helpers/mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required'],
    },

    productImgUrl: String,

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
        type: Date
    },

    categories: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: "Category",
        required: true 
    },

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;