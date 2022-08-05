// @ts-check

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/jsons', {
    encoding: 'utf-8',
    highWaterMark: 20,
})

let totalSum = 0
let accumulatedJsonStr = ''

rs.on('data', (chunk) => {
    log('Event: data', chunk)

    
    if (typeof chunk !== 'string') {
        return
    }

    accumulatedJsonStr += chunk

    const lastNewlineIdx = accumulatedJsonStr.lastIndexOf('\n')

    const jsonLinesStr = accumulatedJsonStr.substring(0, lastNewlineIdx)
    accumulatedJsonStr = accumulatedJsonStr.substring(lastNewlineIdx)
    
    totalSum += jsonLinesStr
        .split('\n')
        .map((jsonLine) => {
            try {
                return JSON.parse(jsonLine)
            } catch (error) {
                return undefined
            }
        })
        .filter((json) => json)
        .map((json) => json.data)
        .reduce((sum, curr) => sum + curr, 0)  
})

rs.on('end', () => {
    log('Event: end')
    log(`totalSum`, totalSum)
})

