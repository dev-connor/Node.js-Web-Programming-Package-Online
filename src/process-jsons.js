// @ts-check

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/jsons', {
    encoding: 'utf-8',
    highWaterMark: 6,
})

let totalSum = 0

rs.on('data', chunk => {
    log('Event: data', chunk)

    if (typeof chunk !== 'string') {
        return
    }

    totalSum += chunk
        .split('\n')
        .map(jsonLine => {
            try {
                return JSON.parse(jsonLine)
            } catch (error) {
                return undefined
            }
        })
        .filter(json => json)
        .map((json) => json.data)
        .reduce((sum, curr) => sum + curr, 0) 
})

rs.on('end', () => {
    log('Event: end')
    log(`totalSum`, totalSum)
})

