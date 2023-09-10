const express = require('express');
const categoryController = require('../controllers/category.controller');
const categoryRouter = express.Router();

categoryRouter.post('/api/v1/category', categoryController.add);
categoryRouter.get('/api/v1/category', categoryController.getAll);
categoryRouter.get('/api/v1/category/:id', categoryController.get);
categoryRouter.delete('/api/v1/category/:id', categoryController.delete);
categoryRouter.put('/api/v1/category/:id', categoryController.update);

module.exports = categoryRouter;