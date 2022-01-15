const Router = require('express')
const { Student } = require('../models')

const router = Router()

router.post('/', async (req, res) => {
  const data = req.body
  const addId = { $inc: { id: 1 } }
  try {
    const test = await Student.create(data)
    console.log(test)
    res
      .status(201)
      .send({
        message: 'Student created',
        errors: null
      })
  } catch (errors) {
    res
      .status(400)
      .send({
        message: 'Failed create student',
        errors
      })
  }
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const data = req.body
  const opts = { runValidators: true }
  try {
    await Student.findByIdAndUpdate({ _id: id }, data, opts)
    res
      .status(200)
      .send({
        message: 'Student updated',
        errors: null
      })
  } catch (errors) {
    res
      .status(400)
      .send({
        message: 'Failed update student',
        errors
      })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await Student.findByIdAndDelete({ _id: id })
    res
      .status(200)
      .send({
        message: 'Student deleted',
        errors: null
      })
  } catch (errors) {
    res
      .status(400)
      .send({
        message: 'Failed delete student',
        errors
      })
  }
})

router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res
      .status(200)
      .send({
        message: 'Success get students',
        errors: null,
        data: students
      })
  } catch (errors) {
    res
      .status(400)
      .send({
        message: 'Failed get students',
        errors
      })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const students = await Student.findOne({ _id: id })
    res
      .status(200)
      .send({
        message: 'Success get student',
        errors: null,
        data: students
      })
  } catch (errors) {
    res
      .status(400)
      .send({
        message: 'Failed get student',
        errors
      })
  }
})

module.exports = router
