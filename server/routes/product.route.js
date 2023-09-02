const express = require('express');
const productController = require('../controllers/product.controller');
const uploadImg = require('../helpers/upload');

const productRouter = express.Router();

// CRUD Product
productRouter.get('/api/v1/product', productController.getAll);
productRouter.get('/api/v1/product/:id', productController.get);
productRouter.post('/api/v1/product', uploadImg, productController.add);
productRouter.delete('/api/v1/product/:id', productController.delete);
productRouter.put('/api/v1/product/:id', uploadImg, productController.update);

module.exports = productRouter;