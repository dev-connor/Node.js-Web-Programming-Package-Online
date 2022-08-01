// @ts-check

const {log} = console

const a = require('./module')
const b = require('./module')
const c = require('./module')

console.log(a === b, b === c)