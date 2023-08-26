const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Confirm new user has been saved
const confirmNewUser = (doc, next) => {
    console.log('new user saved', doc);

    next();
}

// Hash password before the user is saved to db
const hashPassword = async function (doc, next) {
    const salt = await bcrypt.genSalt();
    doc.password = await bcrypt.hash(doc.password, salt);

    next();
};


// Authentication using jwt 
const maxAge = 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, "group11secret", {
        // Token expires in 1 day 
        expiresIn: maxAge
    });
}

module.exports = { confirmNewUser, hashPassword, createToken };


