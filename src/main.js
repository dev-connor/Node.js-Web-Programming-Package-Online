// @ts-check

const { createApi } = require('unsplash-js')
const { default: fetch} = require('node-fetch')
const { default: convertLayerAtRulesToControlComments } = require('tailwindcss/lib/lib/convertLayerAtRulesToControlComments')


const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_ACCESS_KEY,
  // @ts-ignore
  fetch,
})

async function main() {
    const result = await unsplash.search.getPhotos({ query: 'mountain'})
    console.log(result)
}

main()