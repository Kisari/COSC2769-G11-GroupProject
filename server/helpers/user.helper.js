const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Confirm new user has been saved
const confirmNewUser = (doc, next) => {
    console.log('new user saved', doc);

    next();
} 

// Hash password before the user is saved to db
const hashPassword = async (doc, next)  => {
    const salt = await bcrypt.genSalt();
    // Clean the input before saving 
    if (doc.type === 'customer') {
        doc.address = doc.address.trim();
        doc.name = doc.name.trim();
    }
    else if (doc.type === 'seller') {
        doc.businessName = doc.businessName.trim();
    }
    doc.password = await bcrypt.hash(doc.password, salt);

    next();
};

// Login user
const login = async(email, password) => {
    // Find the email in both Seller and Customer db
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            if (user.type === 'seller' || user.type === 'customer') {
                return user;
            }
            else {
                throw Error ('Invalid role');
            }
        }
        throw Error ('Incorrect password');
    }
    throw Error ('Incorrect email');
}

// Authentication using jwt 
const maxAge = 24 * 60 * 60 
const createToken = (id) => {
    return jwt.sign({id}, "group11secret", {
        // Token expires in 1 day 
        expiresIn: maxAge
    });
}

module.exports = {confirmNewUser, hashPassword, login, createToken};


