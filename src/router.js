var Router = require("koa-router");

var router = new Router()

var product = require("./terminal/producer");

router.post("/api/sendMessage",async (ctx, next) => {
  const body = ctx.request.body
  await product(body);
})

// router.post('/api/worker', async (ctx, next) => {
// })

module.exports = router