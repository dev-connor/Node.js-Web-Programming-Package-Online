const { sleep } = require('@connor_/fc21-test-pkg')

async function main() {
    console.log('before sleep')
    await sleep(1000)
    console.log('after sleep')
}

main()