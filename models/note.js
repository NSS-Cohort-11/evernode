'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Notes',
  mongoose.Schema({
    title: String,
    text: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories'
    }
  })
);
