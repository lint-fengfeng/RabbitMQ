var koa = require("koa");

var cors = require("@koa/cors")

var app = new koa();

var bodyParser = require("koa-bodyparser");

var router = require("./router");

app.use(cors({
  "Access-Control-Allow-Origin": "*"
}))

app.use(bodyParser());

// app.use(async (ctx, next) => {
//   await next();
//   if (ctx.status === 404) {
//     ctx.status = 404;
//     return
//   }
//   ctx.status = 200;
// })

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3100, function() {
  console.log("You app has run at 3100...")
})