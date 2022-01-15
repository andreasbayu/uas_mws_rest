const express = require('express')
const cors = require('cors')

const PORT = process.env.APP_PORT || 3000

const app = express()

const db = require('./config/db')
db()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', ((req, res) => {
  res
    .send({
      message: 'Welcome'
    })
    .status(200)
}))

// routes
app.use('/v1/', require('./routes'))

app.listen(PORT, () => {
  console.log('success')
})
