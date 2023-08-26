const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

// middleware
app.use(cookieParser());

app.use(cors());

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

//create router for app
// require("./routes/route.js")(app);

module.exports = app;
