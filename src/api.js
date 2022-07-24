// @ts-check

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {*} body
 */

/**
 * @typedef Route
 * @property {string} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
    {
        url: '/posts',
        method: 'GET',
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },
        
    {
        url: '/posts/:id', // TODO: RegExp 로 고쳐야 함.
        method: 'GET', 
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
                
        }),
    },
    {
        url: '/posts', // TODO: RegExp 로 고쳐야 함.
        method: 'POST', 
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
                
        }),
    },
]

module.exports = {
    routes, 
}