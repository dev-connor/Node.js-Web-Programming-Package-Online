// @ts-check

const fs = require('fs')

let count = 0

const handle = setInterval(() => {
    console.log('Interval')
    count += 1

    if (count === 4) {
        console.log('done!')
        clearInterval(handle)
    }
}, 1000);