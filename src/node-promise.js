// @ts-check

const { rejects } = require('assert')
const fs = require('fs')

/**
 * 
 * @param {string} fileName 
 */
function readFileInPromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile('.gitignore', 'utf-8', (error, value) => {
            if (error) {
                reject(error)
            }
            console.log(value)
        })
    })
}

fs.promises.readFile('.gitignore', 'utf-8')
.then((value => console.log(value)))

readFileInPromise('.gitignore').then((value => console.log(value)))