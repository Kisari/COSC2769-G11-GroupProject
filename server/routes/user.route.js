const express = require("express");
const userController = require('../controllers/user.controller');

const userRouter = express.Router();


// Login/Sign up route
userRouter.get('/api/v1/user/signup', userController.signupGet);
userRouter.post('/api/v1/user/signup', userController.signupPost);
userRouter.get('/api/v1/user/login', userController.loginGet);
userRouter.post('/api/v1/user/login', userController.loginPost);
userRouter.get('/api/v1/user/logout', userController.logoutGet);

module.exports = userRouter;
