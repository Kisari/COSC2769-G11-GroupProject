const express = require('express');
const productController = require('../controllers/product.controller');
const uploadImg = require('../helpers/upload');

const productRouter = express.Router();

// CRUD Product
productRouter.get('/api/v1/product', productController.getAllProducts);
productRouter.get('/api/v1/product/:id', productController.findProductByID);
productRouter.post('/api/v1/product/create', uploadImg, productController.createProduct);
productRouter.delete('/api/v1/product/:id', productController.deleteProduct);
productRouter.patch('/api/product/:id', productController.editProduct);

module.exports = productRouter;