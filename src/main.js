// @ts-check

const fs = require('fs')

const FILENAME = 'src/main.js'

// fs.readFile(FILENAME, 'utf-8', (err, result) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(result)
//     }
// })

// try {
//     const result = fs.readFileSync(FILENAME, 'utf-8')
//     console.log(result)
// } catch (error) {
//     console.error(error)
// }

// promise-stype
async function main() {
    const result = await fs.promises.readFile(FILENAME, 'utf-8')
    console.log(result)
}

main()