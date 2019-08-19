const express = require('express')
const bookmarkController = express.Router()
const bookmarkModel = require('../models/bookmarkModel.js')
const bookmarkSeed = require('../models/seed.js');

bookmarkController.get('/', (req, res) => {
    bookmarkModel.find({}, (err, foundBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        } else {
            res.status(200).json(foundBookmark)
        }
    })
})

bookmarkController.post('/', (req, res) => {
    bookmarkModel.create(req.body, (error, createdBookmark) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdBookmark)
    })
})

bookmarkController.delete('/:id', (req, res) => {
    bookmarkModel.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedBookmark)
    })
})

bookmarkController.put('/:id', (req, res) => {
    bookmarkController.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedBookmark)
    })
})

// bookmarkController.get('/seed', (req, res) => {
//    bookmarkModel.insertMany(bookmarkSeed, (err, bookmark) => {
//       if (err) { console.log(err); } else {
//          res.redirect('/bookmark')
//       }
//    });
// });

module.exports = bookmarkController;