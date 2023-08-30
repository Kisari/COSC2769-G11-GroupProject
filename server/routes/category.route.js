const express = require('express');
const categoryController = require('../controllers/category.controller');
const categoryRouter = express.Router();

categoryRouter.post('/api/v1/category', categoryController.createNewCategory);

module.exports = categoryRouter;