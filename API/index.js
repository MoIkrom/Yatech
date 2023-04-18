require("dotenv").config();

//  Import Requirments
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const xss = require("xss-clean");
const helmet = require("helmet");

//  Declare Variable
const app = express();
const port = 3001;

// Call Main Router on Routes Folder
const routerNavigation = require("./src/Routes");

// called Requirements
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(xss());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Main Routes that was Called
app.use(routerNavigation);

// If Router Error or Not Found then send this Message
app.use("/*", (request, response) => {
  response.status(404).send("Path Not Found");
});

// Listen Port on Console
app.listen(port, () => {
  console.log(`Server is Running on port:  ${port}`);
});
