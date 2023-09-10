const express = require("express");
const sellerController = require("../controllers/seller.controller");
const { requireAuth } = require("../helpers/user.helper");
const sellerRouter = express.Router();

sellerRouter.get("/api/v1/seller", requireAuth, sellerController.getSellers);
sellerRouter.get("/api/v1/seller/:id", requireAuth, sellerController.get);
sellerRouter.put(
  "/api/v1/seller/:id/approved",
  requireAuth,
  sellerController.approveSeller
);
sellerRouter.put(
  "/api/v1/seller/:id/rejected",
  requireAuth,
  sellerController.rejectSeller
);

module.exports = sellerRouter;
