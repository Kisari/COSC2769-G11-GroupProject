const Category = require("../models/category.model");

// Add a new category
module.exports.add = async (req, res) => {
  let data = {
    name: req.body.name,
    description: req.body.description,
    attributes: req.body.attributes,
    parents: req.body.parents,
  };
  console.log(data.name)

  const existingCategory = await Category.findOne({ name: data.name });

  if (existingCategory) {
    res.json({ message: "Category already existed" });
  } else {
    try {
      const category = await Category.create(data);
      res.status(200).json({ category });
      console.log(category);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

// Get all categories
module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find();

    // Response
    res.status(200).json({ categories });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Get a category
module.exports.get = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findOne({ _id: id });

    // Response
    res.status(200).json({ category });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Edit a category
module.exports.update = async (req, res) => {
  const id = req.params.id;
  const data = {
    // Split for testing
    attributes: req.body.attributes.split(","),
    parents: req.body.parents,
    description: req.body.description,
  };

  try {
    const edited = await Category.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    res.status(200).json({ edited });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete a category
module.exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Category.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: "Delete successfully", category: deleted._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
