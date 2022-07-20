// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

new Promise((resolve, reject) => {
    console.log('Before timeout')
    setTimeout(() => {
        resolve(Math.random())
        console.log('After resolve`')
    }, 1000)
}).then((value) => {
    console.log('value', value)
}).then(() => {
    console.log('then 2')
}).then(() => {
    console.log('then 2')
})
