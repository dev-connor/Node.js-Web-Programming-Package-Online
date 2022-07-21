// @ts-check

const fs = require('fs')

async function main() {
    try {
        const result = await fs.promises.readFile('.gitignora', 'utf-8')
        console.log(result)
    } catch (error) {
        console.log('error', error)
    }
}

main()