const {mongoose} = require("mongoose");

// Define the order schema
const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    dateCreated: {
        type: Date,
        required: true,
        default: Date.now()
    },

    orderStatus: {
        type: String,
        enum: ['pending', 'complete'],
        default: 'pending'
    },

    totalPrice: Number
})

// Create the order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;