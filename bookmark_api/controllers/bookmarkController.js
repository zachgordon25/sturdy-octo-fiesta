const express = require('express')
const bookmarkController = express.Router()
const bookmarkModel = require('../models/bookmarkModel.js')
const bookmarkSeed = require ( '../models/seed.js');

bookmarkController.get('/', (req, res) =>{
   bookmarkModel.find({}, (err, foundBookmark) =>{
       if (err) {
           res.status
       }
   })
})

bookmarkController.get ( '/seed' , ( req, res ) => {
  bookmarkController.insertMany ( bookmarkSeed, ( err , bookmark ) =>{
    if (err) { console.log ( err ); } else {
     res.send (bookmark );
    }
  });
});



module.exports = bookmarkController;