const Product = require("../models/product.model");
const Customer = require("../models/customer.model")
const Cart = require("../models/cart.model")
const CartDetails = require("../models/cartDetails.model")

exports.addToCart = async(req,res) => {
    //Route: req.params.id 
    //đổi sau 
    const customer = Customer.findByID(req.params.id);
    const product = Product.findByID(req.params.id);
    const cart = Cart.findByID(customer.id);
    const cartDetails = CartDetails.findByID(cart.id);
    if(product.stock <= 0){
        console.log("Product is not available")
    }
    //check if product has already been added or not
    if(cartDetails.productID == product.id){
        cartDetails.quantity+= 1;
    }
    else{
        cart.numberOfItems += 1;
        cartDetails.quantity+= 1;
    }
}

exports.removeFromCart = async(req,res) =>{
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

exports.clearCart = async(req,res) => {
    const customer = Customer.findByID(req.params.id);
    const product = Product.findByID(req.params.id);
    const cart = Cart.findByID(customer.id);
    const cartDetails = CartDetails.findByID(cart.id);
    if(cartDetails.quantity >= 0 ){
        cart.numberOfItems = 0;
    }
}