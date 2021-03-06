const Router = require('koa-router');
const articleModel = require('../model/article')

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

// 文章更新
router.put('/api/updateArticle', async (ctx) => {
  const body = ctx.request.body
  const result = await articleModel.updateOne({ _id: body.id },
    {
      $set:
      {
        content: body.content,
        markdown: body.markdown,
        title: body.title,
        imgurl: body.imgurl,
        desc: body.desc,
        lastUpdateAt: body.lastUpdateAt
      }
    })
  ctx.body = {
    result: 'success'
  }
})

// 文章删除
router.delete('/api/deleteArticle/:id', async (ctx) => {
  let id = ctx.params.id
  await articleModel.remove({ _id : id })
  ctx.body = {
    result : 'success'
  }
})

// 文章访问量
router.put('/api/addView', async (ctx) => {
  const body = ctx.request.body
  await articleModel.updateOne({_id:body.id},{$set:{view:body.view += 1}})
  ctx.body = {
    result: 'success'
  }
})

// 添加文章
router.post('/api/addArticle', async (ctx) => {
  const body = ctx.request.body
  const article = new articleModel(body);
  await article.save()
  ctx.body = {
    result: 'success'
  }; //返回数据

})

module.exports = router