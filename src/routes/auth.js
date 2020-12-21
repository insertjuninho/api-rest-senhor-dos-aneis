const express = require('express');
const auth = express.Router();
const authController = require('./controller')

auth.post("/register", authController.register)

module.exports = auth;