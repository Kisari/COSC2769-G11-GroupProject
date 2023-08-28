const Customer = require("../models/customer.model");
const Seller = require("../models/seller.model");
const { createToken } = require('../helpers/user.helper');
const bcrypt = require("bcrypt");

// Error handling
const handleErrors = (err) => {
    // Err message: the message in model 
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'Incorrect email') {
        errors.email = 'Email not registered';
    }

    // incorrect password
    if (err.message === 'Incorrect password') {
        errors.password = 'Incorrect password';
    }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = "Email already registered";
    }

    // validation errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    };

    return errors;
};


// Login / Sign up controllers

// Sign up
module.exports.signupPost = async (req, res) => {
    const { email, password, type, phone, address, name } = req.body;

    try {
        var user = null;
        if (type == 'customer') {
            user = await Customer.create({ email, phone, password, address, userName: name, type });
        }
        else if (type == 'seller') {
            user = await Seller.create({ email, phone, password, address, businessName: name, type });
        }

        else {
            throw new Error('Invalid role');
        }

        // Create token for the user
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 });
        // Success status
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        // Error handling 
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

// Login
module.exports.loginPost = async (req, res) => {
    const { email, password } = req.body;
    try {
        let customer = await Customer.findOne({ email });
        let seller = await Seller.findOne({ email });
        let user;
        let validUser;

        if (customer) {
            user = customer;
        }
        else {
            user = seller;
        }

        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                validUser = user;
            }
            else {
                throw Error("Incorrect password");
            }
        }
        else {
            throw Error('Incorrect email');
        }

        const token = createToken(validUser._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 });
        // Success status 
        res.status(200).json({ user: validUser._id });

    }
    catch (err) {
        // Error handling
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};


// Logout
module.exports.logoutGet = (req, res) => {
    // Delete token
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({message: "Logged out successfully"});
}