const express = require('express')
const router = express.Router()

const petsRouter = require('./pets')

router.use('/pets', petsRouter)

module.exports = router