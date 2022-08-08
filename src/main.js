// @ts-check

const express = require('express')
const fs = require('fs')

const userRouter = express.Router()

const app = express()

const PORT = 5000

app.get('/users', (req, res) => {
    res.send('User list')
})

app.get('/users/:id', (req, res) => {
    res.send('User info with ID')
})

app.post('/users', (req, res) => {
    // Register user
})

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})