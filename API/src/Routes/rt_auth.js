const express = require("express");
const { login, Register, refresh } = require("../Controllers/c_auth");

const Router = express.Router();

Router.post("/login", login);
Router.post("/register", Register);
Router.post("/refresh", refresh);

module.exports = Router;
