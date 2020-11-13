const express= require('express')
const server = express()

//path
const path = require('path')

//middleware
server.use(express.static(path.join(__dirname, '..', './public')))
server.use(express.static(path.join(__dirname, '..', './src')))

module.exports = server