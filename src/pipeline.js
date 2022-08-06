// @ts-check

const { log, error } = console

const fs = require('fs')
const stream = require('stream')
const zlib = require('zlib')

stream.pipeline(
    fs.createReadStream('local/big-file'),
    zlib.createGzip(),
    fs.createWriteStream('local/big-file.gz'),
    (err) => {
        if (err) {
            error(`Pipeline failed.`, err)
        } else {
            log(`Pipeline succeeded.`)
        }
    }
)