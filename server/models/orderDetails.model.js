const {mongoose} = require("mongoose");

// Define the order details schema
const orderDetailsSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },

    quantity: {
        type: Number,
        default: 1
    },

    subTotal: Number,

    status: {
        type: String,
        enum: ['new', 'shipped', 'canceled', 'accepted', 'rejected'],
        default: 'new'
    }
})

// Create the order details model
const OrderDetails = mongoose.model("OrderDetails", orderDetailsSchema);

module.exports = OrderDetails;