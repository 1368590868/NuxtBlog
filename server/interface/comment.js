const Router = require('koa-router');
const commentModel = require('../model/comment')
// 邮箱发送
const {sendMail} = require('./sendmail')

const router = new Router()

// 首页5条评论查询
router.get('/api/homeComment', async (ctx) => {
  const result = await commentModel.find({}).sort({
    _id: -1
  }).limit(5)
  ctx.body = {
    result: 'success',
    data: result
  }
})

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
  ctx.body = {
    result: 'success',
    data: result
  }
})

// 提交评论
router.post('/api/addComment', async (ctx) => {
  const body = ctx.request.body
  const addComment = new commentModel(body)
  await addComment.save()
  // // 邮件发送
  sendMail('1368590868@qq.com', '有新评论', `
  <div style="padding-left:10vw;padding-right: 10vw;padding-top: 10vh;">
        <div style="padding:30px;border-radius: 8px;box-shadow: 0 0 10px #ccc;">
            <span>姓名：${body.username}，邮箱：${body.email},给你评论：</span>
            <p
                style="text-decoration:none; box-sizing:border-box;font-weight:bold;min-height: 35px;color: #555;width:100%;overflow: hidden;">
                <span style="float: left;width: 60px">内容：</span>
                <span>${body.comment}</span>
            </p>
            <p><a href='https://irlin.cn/article/${body.article}'>点击查看评论</a></p>
            <p style="color:#0181da;margin-bottom:0;"><b>温馨提示</b>：本邮件由系统自动发出，请勿直接回复！</p>
        </div>
    </div> `)
  ctx.body = {
    result:'success'
  }
})

// 评论回复
router.put('/api/addReply', async (ctx) => {
  const body = ctx.request.body
  await commentModel.updateOne({ _id: body.id }, { $push: { reply: { comment: body.comment } } })
  // // 邮件发送
  sendMail(body.email, '您在木木的博客有了新回复', `
  <div style="padding-left:10vw;padding-right: 10vw;padding-top: 10vh;">
        <div style="padding:30px;border-radius: 8px;box-shadow: 0 0 10px #ccc;">
            <span>亲爱的${body.username},木木给您的回复如下：</span>
            <p
                style="text-decoration:none; box-sizing:border-box;font-weight:bold;min-height: 35px;color: #555;width:100%;overflow: hidden;">
                <span style="float: left;width: 60px">内容：</span>
                <span>${body.comment}</span>
            </p>
            <p style="color:#0181da;margin-bottom:0;"><b>温馨提示</b>：本邮件由系统自动发出，请勿直接回复！</p>
        </div>
    </div> `)
  ctx.body = {
    result: 'success'
  }
})

// 删除评论
router.delete('/api/deleteReply/:id', async (ctx) => {
  const id = ctx.params.id
  await commentModel.remove({ _id: id })
  ctx.body = {
    result : 'success'
  }
})



module.exports = router