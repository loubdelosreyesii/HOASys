const mongoose = required('mongoose')

const homeOwnerCommitteeSchema = mongoose.Schema(
  {
    homeOwnerId: {
      type: String,
      required: [true, 'Please assigned an Home Owner Record.'],
    },
    positionId: {
      type: Int16Array,
      required: [true, 'Please assigned a position.'],
    },
  },
  {
    timestamps: true,
  }
)

const HomeOwnerCommittee = mongoose.model(
  'HomeOwnerCommittee',
  homeOwnerCommitteeSchema
)
module.exports = HomeOwnerCommittee
