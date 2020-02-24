const Koa = require('koa')
const consola = require('consola')
const {connect} = require('./dbs/init.js')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('koa-bodyparser')
var cors = require('koa2-cors');
// const {sendMail} = require('./interface/sendmail.js')
// const Router = require('koa-router');

// 引入数据库操作文件
const imgRouter = require('./interface/img')
const articleRouter = require('./interface/article')


const app = new Koa()
app.use(cors());
// const router = new Router();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server


  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 连接mongodb
  connect()
  // 邮件发送
  // sendMail('1061235055@qq.com','subject','<h1>sendMail</h1>')


  app.use(bodyParser());
  // 使用路由
  app
    .use(imgRouter.routes())
    .use(imgRouter.allowedMethods());
  app
    .use(articleRouter.routes())
    .use(articleRouter.allowedMethods());
  


  
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
