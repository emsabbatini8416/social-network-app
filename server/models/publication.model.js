const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const PublicationSchema = new Schema({
    message: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    files: [String],
    publicationDate: {
      type: Date,
      default: Date.now()
    },
    comment: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Like'
    }]
},
{
  timestamps: true
});

module.exports = mongoose.model('publications', PublicationSchema);