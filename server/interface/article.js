const Router = require('koa-router');
const articleModel = require('../model/article')
const consola = require('consola')

const router = new Router()

router.get('/api/article', async (ctx) => {
    const result = await articleModel.find({})
    ctx.body = {
        result: 'result',
        data : result
    }
})

//首页文章查询6条
router.get('/api/homeArticle', async (ctx) => {
  const result = await articleModel.find({}).limit(6).sort({_id:-1})
  ctx.body = {
    result: 'result',
    data: result
  }
})

// 文章内容
router.get('/api/article/:id', async (ctx) => {
  const id = ctx.params.id
  const result = await articleModel.find({ _id: id })
  ctx.body = {
    result: 'result',
    data: result
  }
})

router.post('/api/addArticle', async (ctx) => {
  const body = ctx.request.body
  consola.info(body)
  const article = new articleModel(body);
  await article.save()
  ctx.body = {
    result: 'success'
  }; //返回数据

})

module.exports = router