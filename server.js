'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const logger = require('./lib/logger');
const note = require('./routes/note');
const category = require('./routes/category');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));
app.use(logger);

app.get('/', (req, res) => {
  res.send('Server Running');
});

// routes
app.use(note);
app.use(category);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
