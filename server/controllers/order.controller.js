const Order = require("../models/order.model")
const OrderDetails = require("../models/orderDetails.model")
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")
const Product = require("../models/product.model")

exports.createOrder = async(req,res) => {
    const cart = Cart.findbyId(req.params.id);
    const cartDetails = CartDetails.findbyId(cart.id);
    const customerId = cart.customerId;
    const productPrice = Product.findbyId(cartDetails.productID).price;
    const date = new Date();
    const status = "new";
    var order = null;
    var orderID = null;
    var productID = Product.findbyId(cartDetails.productID).id;
    var quantity = cartDetails.quantity;
    var orderDetails = null;
    //calculate total price
    var totalPrice = productPrice * cartDetails.quantity;
    //Create order
    order = await Order.create({customerId, date, status,totalPrice });
    orderID = order.id;
    var productStatus = "delivering";
    //Create orderDetails
    orderDetails = await OrderDetails.create({orderID,productID,quantity,totalPrice,productStatus})
}

exports.changeProductStatus = async(req,res) => {
    const order = Order.findbyId(req.params.id);
    const orderDetails = OrderDetails.findbyId(order.id);
    orderDetails.findOneAndUpdate(
        { _id: order.id}, // Specify the filter criteria to find the document
        { $set: { 
          productStatus : req.body.status
        } }, // Specify the update operation
        { new: true } // Set the option to return the updated document
      )
}

exports.checkProductStatus = async(req,res) => {
    const order = Order.findbyId(req.params.id);
    const orderDetails = OrderDetails.findbyId(order.id);
    const productStatus = OrderDetails.productStatus;
}