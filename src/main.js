// @ts-check

const express = require('express')
const fs = require('fs')

const userRouter = express.Router()

const app = express()

const PORT = 5000

userRouter.get('/', (req, res) => {
res.send('User list')
})

const USERS = {
    15: {
        nickname: 'foo', 
    }
}

userRouter.param('id', (req, res, next, value) => {
    console.log(`id parameter`, value)
    next()
})

userRouter.get('/:id', (req, res) => {
    console.log('userRouter get ID')
    res.send('User info with ID')
})

userRouter.post('/', (req, res) => {
    // Register user
    res.send('User registered.')
})

app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})