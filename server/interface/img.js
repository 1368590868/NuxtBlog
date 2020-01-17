const Router = require('koa-router');
const imgModel = require('../model/img')
const consola = require('consola')

const router = new Router()

router.get('/api/img', async (ctx, next) => {
    const result = await imgModel.find({})
    consola.info('result', result)
    ctx.body = {
        result: 'sucess',
        data : result
    }
})


module.exports = router