const mongoose = require("mongoose");

// Connect to MongoDB
const mongoDbUrl = "mongodb+srv://group11:group11@cluster0.leghpyn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDbUrl, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = {mongoose};