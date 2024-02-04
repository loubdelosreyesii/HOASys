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
router.post('/homeowners/:id',async (req,res)=>{
    
})
module.exports = router
