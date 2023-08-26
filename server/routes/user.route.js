const express = require("express");
const userController = require('../controllers/user.controller');

const userRouter = express.Router();


// Login/Sign up route
userRouter.get('/signup', userController.signupGet);
userRouter.post('/signup', userController.signupPost);
userRouter.get('/login', userController.loginGet);
userRouter.post('/login', userController.loginPost);
userRouter.get('/logout', userController.logoutGet);

module.exports = userRouter;
