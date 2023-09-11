const Product = require("../models/product.model");

// Create a new product
module.exports.add = async (req, res) => {
  let data = {
    name: req?.body?.name,
    stock: req?.body?.stock,
    description: req?.body?.description,
    price: req?.body?.price,
    image: req?.file?.path,
    seller: req.id,
    categories: req?.body?.category,
    attributes: req?.body?.attributes,
  };

  try {
    const product = await Product.create(data);
    res.status(200).json({ product });
    console.log(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// Product inventory for seller
module.exports.getInventory = async (req, res) => {
  const sellerId = req?.id;

  try {
    let products = await Product.find({ seller: sellerId }).populate(
      "categories",
      "name"
    );
    console.log(products);
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get all product, with optional category filtering for customer
// Implemented for pagination
module.exports.getAll = async (req, res) => {
  const page = req?.query.page;
  let category = req?.query?.category;

  if (category) {
    category = category.toLowerCase();
  }

  // Check if there is no page and category specified
  if (page === undefined && category === undefined) {
    try {
      let products = await Product.find().populate("categories", "name");

      // Send products as json
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    // page 1 if no page number specified
    const currentPage = req?.query?.page || 1;
    const limit = 12;

    // Count the matching products
    const count = await Product.find(
      category ? { categories: { $in: [category] } } : null
    ).count();
    // Find the maximum page nuber
    const maxPage = Math.ceil(count / limit);
    // Count the products to skip
    const skip = parseInt(page) === 1 ? 0 : page * limit - limit;

    try {
      let products = await Product.find(
        category ? { categories: { $in: { category } } } : null
      )
        .skip(skip)
        .limit(limit)
        .populate("categories", "name");
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ message: err });
    }
  }
};

// Retrieve a product by ID
module.exports.get = async (req, res) => {
  const id = req?.params?.id;
  try {
    const product = await Product.findById(id).populate("categories", "name");
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Update a product
module.exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, stock, description, price, attributes, categories } = req?.body;
  const image = req?.file?.path;

  try {
    let product = await Product.findById(id);
    const updated = await Product.findByIdAndUpdate(
      id,
      { name, stock, description, price, attributes, categories, image },
      { new: true }
    );
    console.log(updated);
    res.status(200).json({ updated });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

// Delete a product
module.exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Product.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: "Delete successfully", product: deleted._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
