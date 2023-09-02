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

module.exports.update = async(req,res) =>{
    const customer = Customer.findByID(req.params.id);
    const product = Product.findByID(req.params.id);
    const cart = Cart.findByID(customer.id);
    const cartDetails = CartDetails.findByID(cart.id);
    //check if product has already been added or not
    if(cartDetails.productID == product.id){
        cartDetails.quantity-= 1;
    }
    if(cartDetails.quantity <= 0){
        cart.numberOfItems -= 1;
    }
}

module.exports.clearALL = async(req,res) => {
    const customer = Customer.findByID(req.params.id);
    const product = Product.findByID(req.params.id);
    const cart = Cart.findByID(customer.id);
    const cartDetails = CartDetails.findByID(cart.id);
    if(cartDetails.quantity >= 0 ){
        cart.numberOfItems = 0;
    }
}