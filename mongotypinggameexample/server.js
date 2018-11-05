const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

const scores = require('./routes/scorePost')

app.use(express.json())
app.use(express.static('./client/build'))
// DB Config
const db = require('./config/keys').mongoURI

// connect to my DB
// { useNewUrlParser: true }
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('DB Error: ', err))

// Use <routes></routes>
app.use('/score', scores)

// If in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// define port & listen to that port or basically start the server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server's running on ${port}`))
