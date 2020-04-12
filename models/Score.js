// models/Score.js

import { Schema, model } from 'mongoose';

const ScoreSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
});

export default Score = model('score', ScoreSchema);