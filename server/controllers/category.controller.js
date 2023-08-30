const Category = require("../models/category.model");

exports.createNewCategory = async(req,res) => {

    let data = {
        name : req.body.name,
        description : req.body.description,
        attributes : req.body.attributes,
    }

    data.attributes = JSON.parse(data.attributes); 

    Category.create({data})
}

exports.getAllCategory = async(req,res) => {
    
}