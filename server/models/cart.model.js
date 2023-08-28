const {mongoose} = require("mongoose");

// Define the cart schema
const cartSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    numberOfItems: Number
});

// Create a the cart model
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;