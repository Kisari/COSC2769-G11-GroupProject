const mongoose = require("mongoose");
import {userSchema} from "./user.model";

const customerSchema = mongoose.Schema({
    type: 'customer',
    name: {
        type: String,
        trim: true,
        required: true,
    },

    address: String,

});

// Customer schema is a child of User schema
customerSchema.extends(userSchema);

// Create the customer model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;