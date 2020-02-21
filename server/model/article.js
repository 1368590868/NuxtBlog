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
  imgurl: {
    type: String,
    default: 'http://cdn.irlin.cn/wangwang.jpeg'
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
  },
  view: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('article', articleSchema, 'article')