const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: String,
  publicationId: {
    type: Schema.Types.ObjectId,
    ref: 'Publication'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Required field']
  },
  commentDate: {
    type: Date,
    default: Date.now()
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('comments', CommentSchema);