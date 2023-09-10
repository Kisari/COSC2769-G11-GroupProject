const Product = require("../models/product.model");

// Create a new product 
module.exports.add = async(req,res) => {

    let data = {
        name : req?.body?.name,
        stock : req?.body?.stock,
        description : req?.body?.description,
        price : req?.body?.price,
        image: req?.file?.path,
        seller: req.id,
        categories : req?.body?.category,
        attributes: req?.body?.attributes
    };
    
    console.log(JSON.stringify(data, null, 2));

    try{
        const product = await Product.create(data);
        res.status(200).json({product});
        console.log(product);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error});
    }
}

// Product inventory for seller
module.exports.getInventory = async (req, res) => {
  const sellerId = req?.id;

  try {
    let products = await Product.find({ seller: sellerId }).populate(
      "categories",
      "name"
    );
    console.log(products);
    res.status(201).json({ products });
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
  const data = {
    image: req?.file?.path,
    stock: req?.body?.stock,
    description: req?.body?.description,
    price: req?.body?.price,
    attributes: req?.body?.attributes,
    // Split for testing
    categories: req?.body?.categories,
  };

<<<<<<< HEAD
    try {
        const updated = await Product.findByIdAndUpdate({_id: id}, {$set: data}, {new: true});
        res.status(200).json({updated});
    }
    catch (err) {
        res.status(500).json({message: err});
    }
}
=======
  if (data.attributes) {
    data.attributes = JSON.parse(data.attributes);
  }

  try {
    const updated = await Product.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    res.status(200).json({ updated });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
>>>>>>> 7d711752a6e2a78050e4ca658ad268aa8ab82d6b

// Delete a product
module.exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Product.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Delete successfully", product: deleted._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
