const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.post('/notes', note.create);

module.exports = router;
