// @ts-check

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/big-file', {
    encoding: 'utf-8',
    highWaterMark: 65536 * 2
})

/** @type {Object.<string, number} */
const numBlockPerCharacter = {
    a: 0,
    b: 0,
}

/** @type {string | undefined} */
let prevCharacter
let chunkCount = 0

rs.on('data', (data) => {
    chunkCount += 1
    
    if (typeof data !== 'string') {
        return 
    }

    for (let i = 0; i < data.length; i += 1) {
        if (data[i] !== prevCharacter) {
            const newCharacter = data[i]

            if (!newCharacter) {
                continue
            }
            
            prevCharacter = newCharacter
            numBlockPerCharacter[newCharacter] += 1
        }
        
    }
})


rs.on('end', () => {
    log('Event: data')
    log('blockCount', numBlockPerCharacter)
    log('chunkCount', chunkCount)
})