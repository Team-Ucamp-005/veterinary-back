const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { petsController } = require('../controllers')

const { getPets, createPet, updatePet, deletePet } = petsController

router.get('/', async (req, res) => {
  const pets = await getPets()
  res.send(pets)
})

router.post('/', async (req, res) => {
  const body = req.body

  try {
    const newPet = await createPet(body)
    res.status(201)
    res.send(newPet)
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body
  const pet = await updatePet(id, body)

  if (!pet) {
    res.status(404)
    return res.send({
      message: `La mascota con id: ${id}, no se encuentra`
    })
  }
  res.send(pet)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await deletePet(id)

  res.send(result)
})

module.exports = router