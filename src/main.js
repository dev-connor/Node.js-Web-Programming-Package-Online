// @ts-check

require('core-js')

const complicatedArray = [1, [2, 3]]
const flattedArray = complicatedArray.flat()

console.log(flattedArray)