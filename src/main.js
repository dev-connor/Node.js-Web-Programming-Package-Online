// @ts-check

const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, './test.txt')
console.log('filePath', filePath)

const fileContent = fs.readFileSync(filePath, 'utf-8')
console.log(fileContent)

