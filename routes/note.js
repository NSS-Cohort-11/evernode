'use strict';

const express = require('express');
const router = express.Router();

const Note = require('../models/note');

const ctrl = require('../controllers/note');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    .exec((err, note) => {
      if (err) throw err;

      req.note = note;
      next();
    });
});

router
  .get('/notes', ctrl.index)
  .get('/notes/new', ctrl.new)
  .post('/notes', ctrl.create)
  .get('/notes/:id', ctrl.show)
  .get('/notes/:id/edit', ctrl.edit)
  .put('/notes/:id', ctrl.update)
  .delete('/notes/:id', ctrl.destroy);

module.exports = router;
