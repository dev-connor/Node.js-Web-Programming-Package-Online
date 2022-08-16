// @ts-check

const fs = require('fs')
const http = require('http')
const { createApi } = require('unsplash-js')
const { default: fetch} = require('node-fetch')
const sharp = require('sharp')

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

/**
 * 
 * @param {string} url 
 */
function convertURLToQueryKeyword(url) {
    return url.slice(1)


}

const server = http.createServer((req, res) => {
    async function main() {
        if (!req.url) {
            res.statusCode = 400
            res.end('Needs URL.')
            return
            
        }
        
        const query = convertURLToQueryKeyword(req.url)
        const result = await searchImage(query)
        const resp = await fetch(result.url)
        resp.body.pipe(res)

    }

    main()

})

const PORT = 5000

server.listen(PORT, () => {
    console.log('The server is listening at port', PORT)
})
