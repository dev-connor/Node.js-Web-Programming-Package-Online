// @ts-check

const fs = require('fs')
const http = require('http')
const { createApi } = require('unsplash-js')
const { default: fetch} = require('node-fetch')
const { default: convertLayerAtRulesToControlComments } = require('tailwindcss/lib/lib/convertLayerAtRulesToControlComments')


const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_ACCESS_KEY,
  // @ts-ignore
  fetch,
})

/**
 * @param {string} query
 * @returns 
 */
async function searchImage(query) {
    const result = await unsplash.search.getPhotos({ query})

    if (!result.response) {
        throw new Error('Failed to search image.')

        
    }

    const image = result.response.results[0]

    if (!image) {
        throw new Error('No image found.')
    }
    
    return {
        description: image.description || image.alt_description,
        url: image.urls.regular,
    }
}

const server = http.createServer((req, res) => {
    async function main() {
        const result = await searchImage('mountin')
        const resp = await fetch(result.url)
        resp.body.pipe(res)

    }

    main()

})

const PORT = 5000

server.listen(PORT, () => {
    console.log('The server is listening at port', PORT)
})
