const {mongoose} = require("../helpers/mongoose");
import {userSchema} from "./user.model";

const customerSchema = mongoose.Schema({
    user: {
        type: userSchema,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },

    address: String,

    birthdate: {
        type: Date,
        validate: {
            validator: (doc) => new Date(doc).getTime < Date.now()
        }
    }
})

// Create the customer model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;