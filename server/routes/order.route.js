const express = require('express');
const orderController = require('../controllers/order.controller')
const orderRouter = express.Router();
const {requireAuth} = require('../helpers/user.helper');

// Check out
orderRouter.get('/api/v1/checkout', requireAuth, orderController.checkout);
// View
orderRouter.get('/api/v1/customer/order');
orderRouter.get('/api/v1/seller/order');
orderRouter.get('/api/v1/customer/order/:id');
orderRouter.get('/api/v1/seller/order/:id');
// Update order status
orderRouter.post('/api/v1/customer/order/detials/:id/accepted');
orderRouter.post('/api/v1/customer/order/details/:id/rejected');



module.exports = orderRouter;