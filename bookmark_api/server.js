//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3003;

// CONTROLLERS
const bookmarkController = require('./controllers/bookmarkController');

// MIDDLEWARE
app.use(express.json());
app.use('/bookmark', bookmarkController);

// MONGOOSE ERROR / DISCONNECTION
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// MONGOOSE LISTENER
mongoose.connect('mongodb://localhost:27017/bookmark', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})

//LISTENER
app.listen(PORT, () => console.log('Listening on port:', PORT));
