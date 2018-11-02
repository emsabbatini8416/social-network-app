const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const LikeSchema = new Schema({
    publicationId: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: [true, 'Required field']
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Required field']
    },
    likeDate: {
        type: Date,
        default: Date.now()
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('likes', LikeSchema);