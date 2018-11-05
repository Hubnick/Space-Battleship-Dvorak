const mongoose = require('mongoose')
const Schema = mongoose.Schema

// my score schema

const scoreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // score: {
  //   type: Number,
  //   required: true
  // }
//EVENTUALLY, TURN OFF THE THREE BELOW, AND TURN ON SCORE ABOVE
  date: {
    type: Date,
    default: Date.now
  },
  cpm: {
    type: Number,
    required: true
  },
  wpm: {
    type: Number,
    required: true
  }
})

module.exports = Score = mongoose.model('Score', scoreSchema)
