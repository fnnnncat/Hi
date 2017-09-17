const Koa = require('koa')
const json = require('koa-json')
const chalk = require('chalk')
const app = new Koa()
const router = require('./app/router')
const config = require('./app/config')

// response
app.use(async (ctx, next) => {
  const start = Date.now()

  await next()
  const ms = Date.now() - start

  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(json())

// logger
app.use(async (ctx, next) => {
  const start = Date.now()

  await next()
  const ms = Date.now() - start

  console.log(`${chalk.green(ctx.method)}\t${chalk.red(ctx.url)}\t${chalk.blue(`${ms}ms`)}`)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.PORT)
