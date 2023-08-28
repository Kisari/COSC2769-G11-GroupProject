const Product = require("../models/product.model");


// Create a new product 
module.exports.createProduct = async(req,res,) => {

    let data = {
        name : req.body.name,
        stock : req.body.stock,
        description : req.body.description,
        price : req.body.price,
        date : req.body.date,
        image: req.file.path,
        categories : req.body.categories,
        attributes: req.body.attributes
    };

    
    data.attributes = JSON.parse(data.attributes); 

    try{
        const product = await Product.create(data);
        res.status(200).json({product});
        console.log(product);
    }
    catch(error){
        res.status(500).send(error);
    }
}

// Get all product, with optional category filtering
// Implemented for pagination
module.exports.getAllProducts = async(req, res) => {
    const page = req?.query.page;
    const category = req?.query?.category.toLowerCase();

    // Check if there is no page and category specified
    if (page === undefined && category === undefined) {
        try {
            let products = await Product.find();
            
            // Send products as json
            res.status(200).json({products});
        }
        catch (error) {
            res.status(500).json({message: 'Cannot get data'});
        }
    }
    
    else {
        // page 1 if no page number specified
        const currentPage = req?.query?.page || 1;
        const limit = 16;

        // Count the matching products 
        const count = await Product.find(category ? {categories: {$in: [category]}} : null).count();
        // Find the maximum page nuber
        const maxPage = Math.ceil(count / limit);
        // Count the products to skip
        const skip = parseInt(page) === 1 ? 0 : page * limit - limit;

        try {
            let products = await Product.find(category ? {categories: {$in: {category}}}: null).skip(skip).limit(limit);
            res.status(200).json({products});
        }

        catch (error) {
            res.status(500).json({message: 'Cannot get data'});
        }

    }
}


// Retrieve a product by ID
module.exports.findProductByID = async(req,res) =>{
    const id = req?.params?.id;
    try {
        const product  = Product.findById(id).populate('categories');
        res.status(201).json({product});
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
    
    
    
}

exports.editProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    Product.findOneAndUpdate(
        {_id : product.id},
        {
            $set: {
               name: req.body.name,
                image: req.file.path,
                stock : req.body.stock,
                description : req.body.description,
                price : req.body.price,
                date : req.body.date,
                //category
            }
        },
        {new:true}
    )
    //render
    .catch(error =>{
        //error handle
    })
}

exports.deleteProduct = async(req,res,next) => {
    const product = Product.findById(req.params.id);
    //cần check product ko tồn tại ko (Xian)
    product.findOneAndDelete(product);

}
