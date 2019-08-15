const express = require('express')
const bookmarkController = express.Router()
const bookmarkModel = require('../models/bookmarkModel.js')

bookmarkController.get('/', (req, res) =>{
   res.send('hello')
})

module.exports = bookmarkController;