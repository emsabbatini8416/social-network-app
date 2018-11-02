const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const FollowerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Required field']
  },
  followerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Required field']
  },
  followDate: {
    type: Date,
    default: Date.now()
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('followers', FollowerSchema);