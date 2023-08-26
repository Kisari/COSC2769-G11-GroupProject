const {mongoose} = require("mongoose");
const userModel = require('./user.model');

const sellerSchema = mongoose.Schema({
    type: {
        type: String,
        default: 'seller',
    },
    businessName: {
        type: String,
        trim: true,
        required: [true, 'Business name required']
    },

    address: String,

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }

});

// Seller schema is a child of User schema
sellerSchema.add(userModel.userSchema);

// Create the customer model
const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;