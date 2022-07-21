// @ts-check

require('core-js')

const original = 'abcabc123'
const changed = original.replaceAll('abc', '123')
console.log(changed)