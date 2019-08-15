const express = require('express')
const bookmarkController = express.Router()
const bookmarkModel = require('../models/bookmarkModel.js')

bookmarkController.get('/', (req, res) =>{
   
})

module.exports = bookmarkController;