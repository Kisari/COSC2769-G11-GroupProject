const express = require('express');
const cartController = require('../controllers/cart.controller');
const cartRouter = express.Router();

// Add product to cart and update quantity
cartRouter.post('/api/v1/cart', cartController.add);
// Remove a product
cartRouter.delete('/api/v1/cart', cartController.remove);
// Clear all
cartRouter.delete('/api/v1/cart/clear', cartController.clear);





module.exports = cartRouter;