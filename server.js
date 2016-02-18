'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const note = require('./routes/note');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(note);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
