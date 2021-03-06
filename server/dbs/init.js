const path = require('path')
const mongoose = require('mongoose')
const db = 'mongodb://root:ranlin520..@irlin.cn:27017/blog'

module.exports = {
  connect() {
    mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    mongoose.connection.on('disconnect', () => {
      console.log('***********数据库断开***********')
      // 重连
      mongoose.connect(db)
    })
    mongoose.connection.on('error', (error) => {
      console.log('***********数据库连接出错***********')
      console.log(error)
      // 重连
      mongoose.connect(db)
    })
    mongoose.connection.on('open', () => {
      console.log('***********mongodb数据库连接成功***********')
    })
  }
}
