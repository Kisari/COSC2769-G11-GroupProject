const mongoose = require("mongoose");
import {userSchema} from "./user.model";

const adminSchema = mongoose.Schema({
    user: {
        type: userSchema,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },

})

// Create the customer model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;