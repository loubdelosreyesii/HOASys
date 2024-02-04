require('./db')

const express = require('express')
const app = express()

const homeOwnerController = require('./controllers/homeOwnerController')

app.use('/api', homeOwnerController)

app.listen(3010, () => {
  console.log(`HOA System API is running on port 3010`)
})

app.get('/', (req, res) => {
  console.log('requesting')
  res.status(202).json({ message: 'succesful request.' })
})
