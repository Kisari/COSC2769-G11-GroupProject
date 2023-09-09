const express = require("express");
const userController = require('../controllers/user.controller');
const {requireAuth} = require('../helpers/user.helper');
const userRouter = express.Router();


// Login/Sign up routes
userRouter.post('/api/v1/user/signup', userController.signupPost);
userRouter.post('/api/v1/user/login', userController.loginPost);
userRouter.get('/api/v1/user/logout', userController.logoutGet);

module.exports = userRouter;
