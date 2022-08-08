// @ts-check

const express = require('express')

const app = express()

const PORT = 5000

app.use('/', (req, res) => {
    console.log('Middleware 1')
})

app.use((req, res) => {
    console.log('Middleware 2')
    res.send('Hello, express!')
})

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})