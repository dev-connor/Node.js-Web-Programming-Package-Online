// @ts-check 

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')
const route = require('koa-route')
const serve = require('koa-static')
const websockify = require('koa-websocket')
const mount = require('koa-mount')

const app = websockify(new Koa())

// @ts-ignore
new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app, // Binding `ctx.render()`, equals to pug.use(app)
})

app.use(mount('/public', serve('src/public')))

app.use(async (ctx) => {
  await ctx.render('main')
})

app.ws.use(
    route.all('/test/:id', (ctx) => {
        ctx.websocket.send('Hello World')
        ctx.websocket.on('message', (message) => {
            console.log(message)
        })
    })
)

app.listen(5000)