// @ts-check

const fs = require('fs')

const buf = Buffer.from([20, 23, 1, 5])

/**
 * 
 * @param {*} array 
 * @returns {number}
 */
function readInt32LE(array) {
    return (
        array[0] 
        + array[1] * 256 
        + array[2] * 256 ** 2
        + array[3] * 256 ** 3
    )
}

const offset = 0

const {log} = console

log(`our function: `, readInt32LE(buf))
log(`orig function: `, buf.readInt32LE(0))
