const mongoose = require('mongoose')

const { Schema, model } = mongoose

const petSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: Number,
  raza: String,
  vacunas: Array
}, {
  versionKey: false,
  timestamps: true
})

const PetModel = model('pets', petSchema)

module.exports = PetModel