const Product = require("../models/product.model");
const Customer = require("../models/customer.model")
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")

module.exports.add = async(req,res) => {
    const {productId, quantity} = req.body;
    const customerId = req.user_.id;

    try {
        let cart = await Cart.findByID({customerId});
        
        // If cart already exists, find the cart details 
        if (cart) {
            let cartDetails = await CartDetails.findByID({cartId: cart._id, productId});
            
            if (cartDetails) {
                const product = Product.findByID({_id: productId});
                if (product.stock == 0 || product.stock < quantity) {
                    res.json({message: 'Inadequate stock'});
                }
                else {
                    // If product exists in the cart, update the quantity
                    cartDetails.quantity = quantity;
                    await cartDetails.save();
                }
            }
            else {
                var newItem = cartDetails.create({cartId: cart._id, productId, quantity});
                cart.numberOfItems += 1;
            }

            res.status(201).json({cart, newItem});
        }
        else {
            let newCart = await Cart.create({customerId, numberOfItems: 1}); 
            let newCartDetails = await CartDetails.create({cartId: cart._id, productId, quantity});

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
        const cart =  await Cart.findByID({cartId});
        cart.numberOfItems -= 1;
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