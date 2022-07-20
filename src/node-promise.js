// @ts-check

const fs = require('fs')

fs.readFile('.gitignore', 'utf-8', (error, value) => {
    console.log(value)
})