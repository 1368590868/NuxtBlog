const Router = require('koa-router');
const imgModel = require('../model/img')
const consola = require('consola')

const router = new Router()

// 全部图片查看
router.get('/api/img', async (ctx, next) => {
    const result = await imgModel.find({})
    consola.info('result', result)
    ctx.body = {
        result: 'sucess',
        data : result
    }
})

// 图片存入数据库
router.post('/api/addImg', async (ctx) => {
    const body = ctx.request.body
    const addImg = new imgModel(body)
    await addImg.save()
    ctx.body = {
        result: 'success'
    }
})

// 删除图片
router.delete('/api/deletePic/:id', async (ctx) => {
    const id = ctx.params.id
    await imgModel.remove({ _id: id })
    ctx.body = {
        result: 'success'
    }
})




module.exports = router