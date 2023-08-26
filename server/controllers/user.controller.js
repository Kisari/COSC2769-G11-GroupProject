const Customer = require("../models/customer.model");
const Seller = require("../models/seller.model");
const { User } = require("../models/user.model");
const {createToken} = require('../helpers/user.helper');


// Login / Sign up controllers
// Render pages 
module.exports.signupGet = (req, res) => {
    res.render('signup');
}

module.exports.loginGet = (req, res) => {
    res.render('login');
}

// Sign up
module.exports.signupPost = async (req, res) => {
    const { email, password, type } = req.body;

    try {
        if (type === 'customer') {
            const user = await Customer.create({ email, phone, password, address, name });
        }
        else if (type === 'seller') {
            const user = await Seller.create({ email, password, address, businessName });
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

        res.status(400).json();
    }
}

// Login
module.exports.loginPost = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 });
        // Success status 
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        // Error handling

        res.status(400).json({ errors });
    }

};

// Logout
module.exports.logoutGet = (req, res) => {
    // Delete token
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login');
}