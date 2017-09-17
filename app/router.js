const Router = require('koa-router')
const router = new Router()

router
  .get('/api/test', async (ctx, next) => {
    const response = {
      code: 200,
      data: {
        name: 'Li Yunfan',
        age: 24,
      },
      msg: '',
    }

    ctx.body = response
    await next()
  })

module.exports = router
