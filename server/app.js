const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');
const categoryRouter = require('./routes/category.route');
const cartRouter = require('./routes/cart.route');
const orderRouter = require('./routes/order.route')

dotenv.config();

const app = express();

// middleware
app.use(cookieParser());
app.use(cors());


// static img upload foler
app.use('./server/uploads', express.static('./server/uploads'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.NODE_PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

//testing
app.get("/", (req, res) => {
  res.send("Tesing");
});

// Database connection 
const db = require('./helpers/mongoose');

// Routes
app.use(userRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(cartRouter);
app.use(orderRouter);


module.exports = app;
