// routes/api/scores.js

const express = require('express');
const router = express.Router();

// Load Score model
const Score = require('../../models/Score')

// @route GET api/scores/test
// @description tests scores route
// @access Public
router.get('/test', (req, res) => res.send('score route testing!'));

// @route GET api/scores
// @description Get all scores
// @access Public
router.get('/', (req, res) => {
  Score.find()
    .then(scores => res.json(scores))
    .catch(err => res.status(404).json({ noscoresfound: 'No Scores found' }));
});

// @route GET api/scores/:id
// @description Get single score by id
// @access Public
router.get('/:id', (req, res) => {
  Score.findById(req.params.id)
    .then(score => res.json(score))
    .catch(err => res.status(404).json({ noscorefound: 'No Score found' }));
});

// @route GET api/scores
// @description add/save score
// @access Public
router.post('/', (req, res) => {
  Score.create(req.body)
    .then(score => res.json({ msg: 'Score added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this score' }));
});

// @route GET api/scores/:id
// @description Update score
// @access Public
router.put('/:id', (req, res) => {
  Score.findByIdAndUpdate(req.params.id, req.body)
    .then(score => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/scores/:id
// @description Delete score by id
// @access Public
router.delete('/:id', (req, res) => {
  Score.findByIdAndRemove(req.params.id, req.body)
    .then(score => res.json({ mgs: 'Score entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a score' }));
});

module.exports = router;