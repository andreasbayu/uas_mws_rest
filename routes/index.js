const router = require('express').Router()

// routes
const student = require('./student')

router.use('/students', student)

module.exports = router
