// @ts-check

const fs = require('fs')

async function main() {
    const result = await fs.promises.readFile('.gitignore', 'utf-8')
    console.log(result)
}

main()