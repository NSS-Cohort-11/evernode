'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Categories',
  mongoose.Schema({
    name: String,
    description: String
  })
);
