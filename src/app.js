const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')
const app = express()

//midlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/', routes)

module.exports = app