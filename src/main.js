// @ts-check

const fs = require('fs')

const bufFromFile = fs.readFileSync('src/test')
const buf = Buffer.from([97, 98, 99, 100, 101])

const bufA = Buffer.from([0])
const bufB = Buffer.from([3])
const bufC = Buffer.from([2])
const bufD = Buffer.from([6])

const bufs = [bufA, bufB, bufC, bufD]
// bufs.sort(Buffer.compare)
bufs.sort((a, b) => a.compare(b))
console.log(bufs)

// console.log(buf.compare(bufFromFile))