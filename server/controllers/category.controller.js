const Category = require("../models/category.model");

module.exports.createNewCategory = async(req,res) => {

    var data = {
        name : req.body.name,
        // description : req.body.description,
        // attributes : req.body.attributes,
    }
    console.log(data);
    
    try {
        const findCategory = await Category.findOne({name: data.name});
        if (findCategory) {
            res.json({message: `${data.name} has already existed`})
        }
        else {
            const category = await Category.create(data);
            // Success status
            res.status(200).json({category}); 
        }
    }
    catch(error) {
        res.status(500).send(error);
    }
}

module.exports.getAllCategories = async(req,res) => {
    try {
        const categories = await Category.find();

        // Response
        res.status(200).json({categories});
    }
    catch (err) {
        res.status(404).send(err);
    }
    
}

