const Order = require("../models/order.model")
const OrderDetails = require("../models/orderDetails.model")
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")
const Product = require("../models/product.model")

// Check out cart and creat an order
module.exports.checkout = async(req,res) => {
  const customerId = req.user.id;
  let totalPrice = 0;
  try {
    const order = await Order.create({customerId, totalPrice});

    // Move cart items to the order
    const cart = await Cart.find({customerId: customerId});
    const cartItems = await CartDetails.find({carId: cart._id});

    for (let cartItem of cartItems) {
      let product = await Product.find({_id: cartItem.productId});
      // Calculate the subtotal 
      let subtotal = product.price * cartItem.quantity;
      var orderDetails = await OrderDetails.create({
        orderId: order._id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        subtotal: subtotal
      })
    };

    // Calculate the total cost 
    let orderItems = OrderDetails.find({orderId: order._id});
    const total = orderItems.reduce((total, item) => total + item.subtotal, 0);

    // Update the product stock
    for (const orderItem of orderItems) {
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
    await Cart.findAndRemove({customerId: customerId});
    
    res.status(200).json({order, orderDetails});
  }
  catch (err) {
    console.log(err);
    res.status(500).json({message: 'Error during checkout'});
  }
}

module.exports.customerView = async(req, res) => {
  
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