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
  sendMail(body.email, '很高兴收到你的评论', `
  <div style="padding-left:10vw;padding-right: 10vw;padding-top: 10vh;">
        <div style="padding:30px;border-radius: 8px;box-shadow: 0 0 10px #ccc;">
            <span>亲爱的${body.username}，很高兴收到你的评论：</span>
            <p
                style="text-decoration:none; box-sizing:border-box;font-weight:bold;min-height: 35px;color: #555;width:100%;overflow: hidden;">
                <span style="float: left;width: 60px">内容：</span>
                <span>${body.comment}</span>
            </p>
            <p><a href='https://irlin.cn/article/${body.article}'>点击查看更多评论</a></p>
            <p style="color:#0181da;margin-bottom:0;"><b>温馨提示</b>：本邮件由系统自动发出，请勿直接回复！</p>
        </div>
    </div> `)
  ctx.body = {
    result:'success'
  }
})



module.exports = router