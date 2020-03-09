const Router = require('koa-router');
const commentModel = require('../model/comment')
// 邮箱发送
const {sendMail} = require('./sendmail')
const consola = require('consola')

const router = new Router()

// 全部评论查询
router.get('/api/allComment', async (ctx) => {
  const result = await commentModel.find({article: 'comment'}).sort({_id:-1})
  ctx.body = {
    result: 'success',
    data: result
  }
})

// 文章评论查询api
router.get('/api/comment/:id', async (ctx, next) => {
  const id = ctx.params.id
  const result = await commentModel.find({article:id}).sort({_id:-1})
  consola.info('result', result)
  ctx.body = {
    result: 'success',
    data: result
  }
})

// 提交评论
router.post('/api/addComment', async (ctx) => {
  const body = ctx.request.body
  consola.info(body)
  const addComment = new commentModel(body)
  await addComment.save()
  // // 邮件发送
  sendMail(body.email, '很高兴收到你的评论', `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
    
        　<tr>
            　　<td> <h2>${body.username},很高兴收到你的评论：</h2> </td>
            　</tr>
    
        　<tr>
            　　<td style='font-size:16px'> ${body.comment} </td>
            　</tr>
    
        　<tr>
            　　<td> <a href='https://irlin.cn/article/${body.article}'>点击查看更多评论</a> </td>
            　</tr>
    
    </table>`)
  ctx.body = {
    result:'success'
  }
})



module.exports = router