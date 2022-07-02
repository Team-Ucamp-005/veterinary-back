const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { petsController } = require('../controllers')

const { getPets } = petsController

router.get('/', async (req, res) => {
  const pets = await getPets()
  res.send(pets)
})

module.exports = router