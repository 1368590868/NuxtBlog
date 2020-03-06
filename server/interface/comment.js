const Router = require('koa-router');
const commentModel = require('../model/comment')
const consola = require('consola')

const router = new Router()

router.get('/api/comment', async (ctx, next) => {
  const result = await commentModel.find({})
  consola.info('result', result)
  ctx.body = {
    result: 'sucess',
    data: result
  }
})




module.exports = router