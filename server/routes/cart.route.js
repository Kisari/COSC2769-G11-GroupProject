const express = require('express');
const cartController = require('../controllers/cart.controller');
const cartRouter = express.Router();
const {requireAuth} = require('../helpers/auth');

// Get all items
cartRouter.get('/api/v1/cart', requireAuth, cartController.get);
// Add product to cart and update quantity
cartRouter.post('/api/v1/cart', requireAuth, cartController.add);
// Remove a product
cartRouter.delete('/api/v1/cart', requireAuth, cartController.remove);
// Clear all
cartRouter.delete('/api/v1/cart/clear',  requireAuth, cartController.clear);





module.exports = cartRouter;