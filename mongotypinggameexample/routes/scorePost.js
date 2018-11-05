const express = require('express')
const router = express.Router()
const Score = require('../models/Score')


//OUMAR + GERONIMO, PLEASE TAKE OUT CPM AND WPM, REPLACE WITH JUST SCORE


String.prototype.capitalFirst = function convert() {
  return this.split('')
    .map((el, i) => {
      return i === 0 ? el.toUpperCase() : el.toLowerCase()
    })
    .join('')
}

router.get('/', (req, res) => {
  Score.find().then(scores => {
    // fetch the top 5 scores based on wpm ( Words Per Minute )
    // INSTEAD, LETS JUST GET ALL THE SCORES AND ARRANGE THEM HIGHEST TO LOWEST
    const users = scores
      .map(i => {
        const { name, cpm, wpm } = i
        return { name, cpm, wpm }
      })
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 5)
    return res.json(users)
  })
})

router.post('/', (req, res) => {
  const { cpm, wpm } = req.body
  const name = req.body.name.capitalFirst()
  console.log(name)
  Score.findOne({ name: name }, (err, doc) => {
    if (err) console.log(err)
    if (doc)
      doc.wpm < wpm ? ((doc.wpm = wpm), (doc.cpm = cpm), doc.save()) : null
    else if (!doc) saveScore(req)
  })
})

// method to create a new doc/user if one doesn't exist yet.
const saveScore = req => {
  let newUser = new Score({
    name: req.body.name.capitalFirst(),
    cpm: req.body.cpm,
    wpm: req.body.wpm
  })
  newUser
    .save()
    .then(() => console.log('saved to DB'))
    .catch(err => console.log(err))
}

module.exports = router
