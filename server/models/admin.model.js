const {mongoose} = require("../helpers/mongoose");
import {userSchema} from "./user.model";

const adminSchema = mongoose.Schema({
    user: {
        type: userSchema,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Name required']
    },

})

// Create the customer model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;