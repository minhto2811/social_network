const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()
const PORT = process.env.PORT
const route = require('./src/route/index')
const db = require('./src/config/db.config')

db.connect()
route(app)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/post/home`)
})