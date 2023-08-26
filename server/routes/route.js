const express = require("express");

const userRouter = require("../routes/user.route");


module.exports = (app) => {
  app.use("/api/v1/user", userRouter);
};


