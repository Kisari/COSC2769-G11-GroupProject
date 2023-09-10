const Order = require("../models/order.model");
const OrderDetails = require("../models/orderDetails.model");
const Cart = require("../models/cart.model");
const CartDetails = require("../models/cartDetails.model");
const Product = require("../models/product.model");
const Customer = require("../models/customer.model");
const mongoose = require("mongoose");

// Check out cart and creat an order
module.exports.checkout = async (req, res) => {
  const customerId = req.id;
  let totalPrice = 0;
  try {
    const order = await Order.create({ customerId, totalPrice });

    // Move cart items to the order
    const cart = await Cart.findOne({ customerId: customerId });
    const cartItems = await CartDetails.find({ cartId: cart._id });

    for (let cartItem of cartItems) {
      let product = await Product.findById(cartItem.productId);
      let subTotal = product.price * cartItem.quantity;
      console.log(subTotal);
      var orderDetails = await OrderDetails.create({
        orderId: order._id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        subTotal: subTotal,
      });
    }

    // Calculate the total cost
    let orderItems = await OrderDetails.find({ orderId: order._id });
    let total = 0;
    for (let orderItem of orderItems) {
      total += orderItem.subTotal;
      console.log(total)
    }

    // Update the product stock
    for (let orderItem of orderItems) {
      let product = await Product.findById(orderItem.productId);
      if (product) {
        product.stock -= orderItem.quantity;
        await product.save();
      }
    }

    order.totalPrice = total;
    await order.save();

    // Empty the cart
    await CartDetails.deleteMany({ cartId: cart._id });
    await Cart.findOneAndRemove({ customerId: customerId });

    res.status(200).json({ order, orderItems });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error during checkout" });
  }
};

// Customer's order history
module.exports.customerGetAll = async (req, res) => {
  const customerId = req?.id;
  try {
    const orders = await Order.find({ customerId: customerId });
    res.status(200).json({ orders });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

// Seller's order database
module.exports.sellerGetAll = async (req, res) => {
  const sellerId = req?.id;
  try {
    // Find the order details with matching seller
    const orderDetails = await OrderDetails.find().populate({
      path: "productId",
      match: { seller: sellerId },
    });
    // Filter out invalid products
    let filtered = orderDetails.filter((ord) => ord.productId);

    // Find the order based on the Order Details
    const orders = await Order.find({
      _id: { $in: filtered.map((ord) => ord.orderId) },
    });

    // Success status
    res.status(200).json({ orders });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

// Get an order's details
module.exports.customerGet = async (req, res) => {
  const orderId = req.params.id;
  try {
    const orderDetails = await OrderDetails.find({ orderId });
    res.status(200).json({ orderDetails });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

// Get an order's details (products belonging to the seller)
module.exports.sellerGet = async (req, res) => {
  const orderId = req.params.id;
  const sellerId = req?.id;
  try {
    const orderDetails = await OrderDetails.find({ orderId }).populate({
      path: "productId",
      match: { seller: sellerId },
    });
    // Filter out invalid products
    let filtered = orderDetails.filter((ord) => ord.productId);
    // Unpopulate the product objects
    let result = filtered.map((ord) => {
      let obj = ord.toObject();
      obj.productId = ord.productId._id;
      return obj;
    });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

// Check the order status
async function updateOrderStatus(orderId) {
  const status = ["accepted", "rejected", "canceled"];
  const orderDetails = await OrderDetails.find({ orderId });
  const completed = orderDetails.every((detail) =>
    status.includes(detail.status)
  );

  // All the order details are statisfied
  if (completed) {
    const order = await Order.findById(orderId);
    order.status = "complete";
    await order.save();
  }
}

// Customer update product status
// Accept
module.exports.customerAccept = async (req, res) => {
  const orderId = req.params.orderId;
  const orderDetailsId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    const orderDetails = await OrderDetails.findOne({
      _id: orderDetailsId,
      orderId: order._id,
    });
    // Change only when the product is shipped
    if (orderDetails.status.toLowerCase() === "shipped") {
      orderDetails.status = "accepted";
      await orderDetails.save();
      // Update the order status
      await updateOrderStatus(order._id);
      res.status(200).json({ message: `Order is accepted`, orderDetails });
    } else {
      res.status(400).json({ message: "Order not found or not shipped" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};

// Reject
module.exports.customerReject = async (req, res) => {
  const orderId = req.params.orderId;
  const orderDetailsId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    const orderDetails = await OrderDetails.findOne({
      _id: orderDetailsId,
      orderId: order._id,
    });
    // Change only when the product is shipped
    if (orderDetails.status.toLowerCase() === "shipped") {
      orderDetails.status = "rejected";
      await orderDetails.save();
      // Update the order status
      await updateOrderStatus(order._id);
      res.status(200).json({ message: `Order is rejected`, orderDetails });
    } else {
      res.status(400).json({ message: "Order not found or not shipped" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};

// Seller update order status
// Shipped
module.exports.sellerShipped = async (req, res) => {
  const orderId = req.params.orderId;
  const orderDetailsId = req.params.id;
  const sellerId = req.id._id;
  console.log(sellerId);

  try {
    const order = await Order.findById(orderId);
    const orderDetails = await OrderDetails.findOne({
      _id: orderDetailsId,
    }).populate("productId");
    // Change only when the product is shipped
    console.log(
      orderDetails.productId.seller.toString() == sellerId.toString()
    );
    if (orderDetails.productId.seller.toString() == sellerId.toString()) {
      orderDetails.status = "shipped";
      await orderDetails.save();
      await updateOrderStatus(order._id);
      // Unpopulate the product for the display
      const odObject = orderDetails.toObject();
      odObject.productId = orderDetails.productId.id;
      res.status(200).json({ message: `Order is shipped`, odObject });
    } else {
      res
        .status(400)
        .json({ message: "Order not found or not owned by the seller" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};

// Shipped
module.exports.sellerCanceled = async (req, res) => {
  const orderId = req.params.orderId;
  const orderDetailsId = req.params.id;
  const sellerId = req.id;

  try {
    const order = await Order.findById(orderId);
    const orderDetails = await OrderDetails.findOne({
      _id: orderDetailsId,
      orderId: order._id,
    }).populate("productId");
    // Change only when the product is shipped
    if (orderDetails && orderDetails.productId.seller.toString() === sellerId) {
      orderDetails.status = "canceled";
      await orderDetails.save();
      await updateOrderStatus(order._id);
      // Unpopulate the product for the display
      const odObject = orderDetails.toObject();
      odObject.productId = orderDetails.productId.id;
      res.status(200).json({ message: `Order is canceled`, odObject });
    } else {
      res
        .status(400)
        .json({ message: "Order not found or not owned by the seller" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};

// Get customer's information
module.exports.getCustomerInfo = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    const customer = await Customer.findById(order.customerId);
    const customerInfo = {
      name: customer.userName,
      address: customer.address,
      phone: customer.phone,
    };
    res.status(200).json({ customerInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

module.exports.viewStatistics = async (req, res) => {
  const sellerId = req?.id._id;
  console.log(sellerId);

  try {
    const statistics = await OrderDetails.aggregate([
      // Find the product
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },

      {
        // Check if the seller is matched
        $match: {
          "product.seller": new mongoose.Types.ObjectId(sellerId),
        },
      },
      {
        // Group the order by order status
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);
    console.log(statistics);
    // Convert result to object
    const result = {};
    for (const stat of statistics) {
      console.log(stat);
      result[stat._id] = stat.count;
    }
    // Success
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};
