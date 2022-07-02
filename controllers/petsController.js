const PetModel = require('../models/petsModel')

const getPets = async () => {
  return PetModel.find({})
}

const createPet = async (body) => {
  const newPet = new PetModel(body)
  newPet.save()
  return newPet
}

const updatePet = async (_id, updateObject) => {
  return PetModel.findOneAndUpdate({ _id }, updateObject, {
    upsert: false,
    new: true
  })
}

const deletePet = async (_id) => {
  return PetModel.findOneAndDelete({ _id })
}

module.exports = {
  getPets,
  createPet,
  updatePet,
  deletePet
}