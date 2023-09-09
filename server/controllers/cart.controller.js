const Product = require("../models/product.model");
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")

module.exports.get = async(req, res)  => {
    const {cartId} = req.body;

    try {
        let allItems = await CartDetails.find({cartId}).populate('productId','name');
        res.status(200).json({allItems});
    }

    catch (err) {
        res.status(500).json({message: 'Cannot retrieve cart'});
    }
}

module.exports.add = async(req,res) => {
    const {productId, quantity} = req.body;
    const customerId = req?.user?.id;

    try {
        let cart = await Cart.findOne({customerId});
        
        // If cart already exists, find the cart details 
        if (cart) {
            let cartDetails = await CartDetails.findOne({cartId: cart._id, productId});
            
            if (cartDetails) {
                const product = await Product.findById({_id: productId});
                if (product.stock == 0 || product.stock < quantity) {
                    res.json({message: 'Inadequate stock'});
                }
                else {
                    // If product exists in the cart, update the quantity
                    cartDetails.quantity = quantity;
                    await cartDetails.save();
                    res.status(201).json({cart, cartDetails});
                }
            }
            else {
                var newItem = await CartDetails.create({cartId: cart._id, productId, quantity});
                cart.numberOfItems += 1;
                res.status(201).json({cart, newItem});
                await cart.save();
            }

            
        }
        else {
            let newCart = await Cart.create({customerId, numberOfItems: 1}); 
            let newCartDetails = await CartDetails.create({cartId: newCart._id, productId, quantity});
           

            res.status(201).json({newCart, newCartDetails});


        }

    }
    catch (err) {
        res.status(500).json({message: err});
    }
    
}


module.exports.remove = async(req, res) => {
    const {cartId, productId} = req.body;

    try {
        await CartDetails.findOneAndRemove({cartId, productId});
        const cart =  await Cart.findById(cartId);
        cart.numberOfItems -= 1;
        await cart.save();
        res.status(201).json({message: "Item removed"});
    }

    catch (err) {
        res.status(500).json({message: err});
    }
}

module.exports.clear = async(req,res) => {
    const {cartId} = req.body;

    try {
        // Delete all items in the CartDetails with the specified cartId
        await CartDetails.deleteMany({cartId});
        await Cart.findOneAndRemove({cartId});
        res.status(201).json({message: "Cart cleared"});
    }

    catch(err) {
        res.status(500).json({message: err});
    }
}