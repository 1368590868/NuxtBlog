const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    username: {
        type: String
  },
  comment: {
      type: String
  },
  email: {
    type: String
  },
  article: {
    type: String
  },
  reply: [{
    comment: { type: String },
    createAt: {type: Date,default: Date.now}
  }],
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('comment', commentSchema, 'comment')