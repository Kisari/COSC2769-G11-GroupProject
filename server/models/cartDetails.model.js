const {mongoose} = require("../helpers/mongoose");

// Define the cart schema
const cartDetailsSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },

    quantity: {
        type: Number,
        default: 1
    }
});


// Create a the cart model
const CartDetails = mongoose.model("CartDetails", cartDetailsSchema);

module.exports = CartDetails;