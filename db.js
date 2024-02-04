const mongoose = require('mongoose')

//Connection to the MongoDatabase
mongoose
  .connect('mongodb://localhost:27017/HoaSys')
  .then(() => {
    console.log('Sucessfully connected to the Mongo Database Server')
  })
  .catch(() => {
    console.log('Error encountered during connection to the Mongo Database.')
  })
