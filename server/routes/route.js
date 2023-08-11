const express = require("express");

const userRouter = require("./user.route");

// use the router with prefix "api/v1/user"

module.exports = (app) => {
  // app.use("/api/v1/user", userRouter);
};
