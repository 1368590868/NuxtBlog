const mongoose = require('mongoose')

const imgSchema = mongoose.Schema({
    url: {
        type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('img', imgSchema, 'img')