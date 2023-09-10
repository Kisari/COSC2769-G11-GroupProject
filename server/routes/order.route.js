const express = require('express');
const orderController = require('../controllers/order.controller')
const orderRouter = express.Router();
const {requireAuth} = require('../helpers/user.helper');

// Check out
orderRouter.post('/api/v1/checkout', requireAuth, orderController.checkout);
// View
orderRouter.get('/api/v1/customer/order', requireAuth, orderController.customerGetAll);
orderRouter.get('/api/v1/seller/order', requireAuth, orderController.sellerGetAll);
orderRouter.get('/api/v1/customer/order/:id', requireAuth, orderController.customerGet );
orderRouter.get('/api/v1/seller/order/:id', requireAuth, orderController.sellerGet);
// Update order status
orderRouter.put('/api/v1/customer/order/:orderId/details/:id/accepted', requireAuth, orderController.customerAccept);
orderRouter.put('/api/v1/customer/order/:orderId/details/:id/rejected', requireAuth, orderController.customerReject);
orderRouter.put('/api/v1/seller/order/:orderId/details/:id/shipped', requireAuth, orderController.sellerShipped);
orderRouter.put('/api/v1/seller/order/:orderId/details/:id/canceled', requireAuth, orderController.sellerCanceled);
// Get customer's information
orderRouter.get('/api/v1/seller/order/:id/customer', requireAuth, orderController.getCustomerInfo);



module.exports = orderRouter;