// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(undefined)
        }, duration)
    })
}

sleep()
.then((value) => {
    console.log(value)
    return sleep()
}).then(value => {
    console.log(value)
    return sleep()
}).then(value => {
    console.log(value)
    return sleep()
}).then(value => {
    console.log(value)
    return sleep()
})

sleep()