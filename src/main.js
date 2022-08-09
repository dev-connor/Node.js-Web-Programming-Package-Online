// @ts-check

const express = require('express')

const app = express()
app.use(express.json())
app.set('views', 'src/views')
app.set('view engine', 'pug')

const PORT = 5000

const userRouter = require('./routers/user')

app.use('/users', userRouter)
app.use('/public', express.static('src/public'))

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})