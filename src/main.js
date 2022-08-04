// @ts-check

const fs = require('fs')

const buf = Buffer.from([0, 1, 2, 3])

console.log(Buffer.isBuffer(buf))