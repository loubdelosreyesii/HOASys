const mongoose = require('mongoose')

const homeOwnerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter first name'],
    },
    middleName: {
      type: String,
      required: [true, 'Please enter middle name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter last name'],
    },
    address: {
      type: String,
      required: [true, 'Please enter address'],
    },
  },
  {
    timestamps: true,
  }
)
const HomeOwner = mongoose.model('HomeOwner', homeOwnerSchema)
module.exports = HomeOwner
