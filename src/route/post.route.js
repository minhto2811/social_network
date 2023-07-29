
const express = require("express")
const route = express.Router()
const postController = require('../controller/post.controller')


route.get('/home',postController.home)

module.exports = route