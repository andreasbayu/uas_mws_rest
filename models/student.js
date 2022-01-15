const mongoose = require('mongoose')
const { Schema } = mongoose

const student = new Schema({
  id: {
    type: Number
  },
  npm: {
    required: [true, 'NPM required'],
    unique: {
      value: true,
      message: 'NPM already taken'
    },
    type: Number
  },
  nama: {
    required: [true, 'Name required'],
    type: String
  },
  jenis_kelamin: {
    required: [true, 'Gender required'],
    type: String,
    enum: {
      values: ['Laki-laki', 'Perempuan'],
      message: '{VALUE} is not supported'
    }
  },
  tanggal_lahir: {
    required: [true, 'Birth date required'],
    type: String
  }
}).set('toJSON', {
  versionKey: false
})

const Student = mongoose.model('Student', student)

module.exports = Student
