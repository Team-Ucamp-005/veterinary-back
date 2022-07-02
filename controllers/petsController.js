const PetModel = require('../models/petsModel')

const getPets = async () => {
  return PetModel.find({})
}

module.exports = {
  getPets
}