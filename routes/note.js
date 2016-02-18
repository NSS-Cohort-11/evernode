const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const note = require('../controllers/note');

router.param('id', (req, res, next, id) => {
  Note.findById(id, (err, note) => {
    if (err) throw err;

    req.note = note;
    next();
  });
});

router
  .get('/notes', note.index)
  .get('/notes/new', note.new)
  .post('/notes', note.create)
  .get('/notes/:id', note.show)
  .get('/notes/:id/edit', note.edit)
  .put('/notes/:id', note.update)
  .delete('/notes/:id', note.destroy);

module.exports = router;
