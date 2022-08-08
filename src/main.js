// @ts-check

const express = require('express')

const app = express()

const PORT = 5000

app.use('/', (req, res, next) => {
    console.log('Middleware 1')
    const requestedAt = new Date()
    // @ts-ignore
    req.requestedAt = requestedAt
    next()
})

app.use((req, res) => {
    console.log('Middleware 2')
    // @ts-ignore
    res.send(`Hello, express!: Requested at ${req.requestedAt}`)
    res.send('Hello, express!')
})

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})