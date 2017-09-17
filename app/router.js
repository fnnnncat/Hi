const Router = require('koa-router');
const router = new Router();

router
  .get('/api/test', async (ctx, next) => {
    const response = {
      name: 'Li Yunfan',
      age: 24,
    }

    ctx.body = response
    await next()
  })

module.exports = router
