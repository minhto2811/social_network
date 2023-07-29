
const express = require("express")
const route = express.Router()
const accountController = require('../controller/account.controller')


route.post('/register',accountController.register)

module.exports = route