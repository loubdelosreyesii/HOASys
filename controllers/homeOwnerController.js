const express = require('express')
const router = express.Router()
const HomeOwner = require('../models/HomeOwner')
router.use(express.json())

//Get all home owners
router.get('/homeowners', async (req, res) => {
  try {
    const homeOwners = await HomeOwner.find()

    if (!homeOwners) return res.status(404).json({ error: 'No Product found.' })

    res.json(homeOwners)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
//Get home owner record
router.get('/homeowners/:id', async (req, res) => {
  try {
    const { id } = req.params
    const homeOwner = await HomeOwner.findById(id)

    if (!homeOwner) return res.status(404).json({ error: 'No Product found.' })

    res.status(200).json(homeOwner)
  } catch (error) {
    res.status(500).json({ error: `Internal server error ${error.message}` })
  }
})

//add record
router.post('/homeowners', async (req, res) => {
  console.log(req.body)
  try {
    const homeowner = await HomeOwner.create(req.body)
    res.status(202).json(homeowner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//update record
router.put('/homeowners/:id', async (req, res) => {
  try {
    const { id } = req.params
    const homeowner = await HomeOwner.findByIdAndUpdate(id, req.body)

    if (!homeowner)
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` })
    else res.status(202).json(homeowner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//delete record
router.delete('/homeowners/:id', async (req, res) => {
  try {
    const { id } = req.params
    const homeowner = await HomeOwner.findByIdAndDelete(id, req.body)

    if (!homeowner)
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` })
    else res.status(202).json(homeowner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
