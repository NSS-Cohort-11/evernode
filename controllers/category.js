'use strict';

const Category = require('../models/category');

module.exports = {
  index (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;

      res.render('category-index', {
        categories: categories
      });
    });
  },

  new (req, res) {
    res.render('category-new');
  },

  create (req, res) {
    Category.create(req.body, (err) => {
      if (err) throw err;

      res.redirect('/categories');
    });
  },

  show (req, res) {
    res.render('category-show', {
      category: req.category
    });
  }
};
