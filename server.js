//Dependencies
const express = require('express');
const app = express();

//Port
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

//Listener
app.listen(PORT, () => console.log('Listening on port:', PORT));
