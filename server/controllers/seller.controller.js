const Seller = require("../models/seller.model");

// Get all sellers
module.exports.getSellers = async (req, res) => {
  try {
    let sellers = await Seller.find();
    res.status(200).json({ sellers });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// View a seller's information
module.exports.get = async (req, res) => {
  const sellerId = req.params.id;
  try {
    const seller = await Seller.findById(sellerId);
    const sellerInfo = {
      email: seller.email,
      phone: seller.phone,
      businessName: seller.businessName,
      status: seller.status,
    };
    res.status(200).json({ sellerInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot get data" });
  }
};

// Approve the seller
module.exports.approveSeller = async (req, res) => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findById(sellerId);
    if (seller) {
      seller.status = "approved";
      await seller.save();
      res.status(200).json({ message: `Seller is accepted`, seller });
    } else {
      res.status(400).json({ message: "Seller not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};

// Reject the seller
module.exports.rejectSeller = async (req, res) => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findById(sellerId);
    if (seller) {
      seller.status = "rejected";
      await seller.save();
      res.status(200).json({ message: `Seller is rejected`, seller });
    } else {
      res.status(400).json({ message: "Seller not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot update" });
  }
};
