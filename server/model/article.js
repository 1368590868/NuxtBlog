const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  content: {
    type: String,
    default: ''
  },
  desc: {
    type: String
  },
  title: {
    type: String,
    default: ''
    },
  articleType: {
      type:  String
    },
  createAt: {
    type: Date,
    default: Date.now
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('article', articleSchema, 'article')