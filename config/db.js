
module.exports = () => {
  const dotenv = require('dotenv')
  const mongoose = require('mongoose')
  dotenv.config()

  const DB_HOST = process.env.DB_HOST
  const DB_PORT = process.env.DB_PORT
  const DB_NAME = process.env.DB_NAME

  mongoose.connect(`${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(_ => console.log('Database connected'))
    .catch(e => console.log(`Connection Failed ${e}`))
}
