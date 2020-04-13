// models/Score.js

const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
});

module.exports = Score = mongoose.model('score', ScoreSchema);