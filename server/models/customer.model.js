const mongoose = require("mongoose");
const userModel = require("./user.model");

const customerSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: [true, 'Name required'],
    },

    address: String,

});

// Customer schema is a child of User schema
customerSchema.add(userModel.userSchema);

// Create the customer model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;