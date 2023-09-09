const Order = require("../models/order.model")
const OrderDetails = require("../models/orderDetails.model")
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")
const Product = require("../models/product.model")

// Check out cart and creat an order
module.exports.checkout = async(req,res) => {
  const customerId = req.id;
  let totalPrice = 0;
  try {
    const order = await Order.create({customerId, totalPrice});

    // Move cart items to the order
    const cart = await Cart.find({customerId: customerId});
    const cartItems = await CartDetails.find({carId: cart._id});

    for (let cartItem of cartItems) {
      var product = await Product.findById(cartItem.productId);
      // Calculate the subtotal 
      let subTotal = product.price * cartItem.quantity;
      var orderDetails = await OrderDetails.create({
        orderId: order._id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        subTotal: subTotal
      })
    };

    // Calculate the total cost 
    let orderItems = await OrderDetails.find({orderId: order._id});
    let total = 0;
    for (let orderItem of orderItems) {
      total += orderItem.subTotal;
    }

    // Update the product stock
    for (let orderItem of orderItems) {
      let  product = await Product.findById(orderItem.productId);
      if (product) {
        product.stock -= orderItem.quantity;
        await product.save();
      }
    }

    order.totalPrice = total;
    await order.save();

    // Empty the cart
    await CartDetails.deleteMany({cartId: cart._id});
    await Cart.findOneAndRemove({customerId: customerId});
    
    res.status(200).json({order, orderDetails});
  }
  catch (err) {
    console.log(err);
    res.status(500).json({message: 'Error during checkout'});
  }
}

// Customer's order history 
module.exports.customerGetAll = async(req, res) => {
  
} 

// Seller's order database 
module.exports.sellerGetAll = async(req, res) => {

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