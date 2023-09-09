const express = require('express');
const productController = require('../controllers/product.controller');
const uploadImg = require('../helpers/upload');
const {requireAuth} = require('../helpers/user.helper');

const productRouter = express.Router();

// CRUD Product
productRouter.get('/api/v1/product', productController.getAll);
productRouter.get('/api/v1/product/:id', productController.get);
productRouter.post('/api/v1/product', uploadImg, productController.add);
productRouter.delete('/api/v1/product/:id', productController.delete);
productRouter.put('/api/v1/product/:id', uploadImg, productController.update);
productRouter.get('/api/v1/inventory', requireAuth, productController.getInventory);

module.exports = productRouter;