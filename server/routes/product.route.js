const express = require('express');
const productController = require('../controllers/product.controller');
const uploadImg = require('../helpers/upload');

const productRouter = express.Router();

// CRUD Product
productRouter.get('/api/v1/product');
productRouter.get('/api/v1/product/:id',);
productRouter.post('/api/v1/product/create', uploadImg, productController.createProduct);
productRouter.delete('/api/v1/product/:id',);
productRouter.patch('/api/product/:id',);

module.exports = productRouter;