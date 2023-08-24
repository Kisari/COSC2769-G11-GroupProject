const Customer = require("../models/customer.model")
const Seller = require("../models/customer.model")
//signup for customer account
exports.customerSignUp = async(req,res,next) => {
    try{
        //check if username already exists
        const exist = await Customer.findOne({username: req.body.username});

        if(exist){
            //Này chuyển render sau 
            console.log("Username already exists");
        }
        var data = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            birthDate : req.body.birthDate
        };

        //Create the customer in database
        Customer.create(data);

    }
    catch(error){
        console.log(error);
    res.status(400).json({
      success: false,
      message: error.message
    })
    next(error);
    }
}
//signup for seller account
exports.sellerSignUp = async(req,res,next) => {
    try{
        //check if username already exists
        const exist = await Seller.findOne({username: req.body.username});

        if(exist){
            //Này chuyển render sau 
            console.log("Username already exists");
        }
        var data = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            status: req.body.status,
        };

        //Create the seller in database
        Seller.create(data);

    }
    catch(error){
        console.log(error);
    res.status(400).json({
      success: false,
      message: error.message
    })
    next(error);
    }
}

exports.logInCustomer = async(req,res,next) => {
    try{
        var data = {
            username : req.body.username,
            password : req.body.password
        }
        //verify the user  

        //check username
        const username = await Customer.findOne({username : data.username})
        if(!username){
            //render later
            console.log("Username wrong");
        }

        //check password

        //will change with hashing later
        if(username.password != data.password){
            console.log("Password wrong");
        }

        //generate token afterwards
    }   
    catch(error){
        next(new ErrorResponse(`Cannot log in, check your credentials`, 400));
    }
}

exports.sellerLogIn = async(req,res,next) => {
    try{
        var data = {
            username : req.body.username,
            password : req.body.password
        }
        //verify the user  

        //check username
        const username = await Seller.findOne({username : data.username})
        if(!username){
            //render later
            console.log("Username wrong");
        }

        //check password

        //will change with hashing later
        if(username.password != data.password){
            //render later
            console.log("Password wrong");
        }

        //generate token afterwards
    }   
    catch(error){
        next(new ErrorResponse(`Cannot log in, check your credentials`, 400));
    }
}