const mongoose = require("mongoose");

// Connect to MongoDB

mongoose.connect('mongodb+srv://group11:group11@cluster0.leghpyn.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = mongoose;