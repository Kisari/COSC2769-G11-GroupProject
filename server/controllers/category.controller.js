const Category = require("../models/category.model");

module.exports.createNewCategory = async(req,res) => {

    let data = {
        name : req.body.name,
        description: req.body.description,
        // attributes: req.body.attributes
    };

    console.log(data);
    try{
        const category = await Category.create(data);
        res.status(200).json({category});
        console.log(category);
    }
    catch(error){
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

