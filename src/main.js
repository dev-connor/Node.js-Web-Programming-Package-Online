// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * 로컬파일을 데이터베이스로 활용할 예정 (JSON)
 * 인증로직은 넣지 않습니다.
 * RESTful API 를 사용합니다.
 */

const { Console } = require('console')
const http = require('http')

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post} */
const examplePost = {
    id: 'abc',
    title: 'abc',
    content: 'abc',
}

const posts = [
    {
        id: "my_first_post",
        title: "My first post",
        content: "Hello!",
    },
    {
        id: "my_second_post",
        title: "My first post",
    },
]

/**
 * POST
 * 
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
    const PORTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
    const postIdRegexResult 
    = req.url && PORTS_ID_REGEX.exec(req.url) || undefined
    
    if (req.url === '/posts' && req.method === 'GET') {
        res.statusCode = 200
        res.end('List of posts')
        
    } else if (postIdRegexResult) { 
        
        // GET /posts/:id
        const postId = postIdRegexResult[1]
        console.log(`postId: ${postId}`)
        
        res.statusCode = 200
        res.end('Reading a post')
    
        
    } else if (req.url === '/posts' && req.method === 'POST') {
        res.statusCode = 200
        res.end('Creawting post')

    } else {
        res.statusCode = 404
        res.end('Not found.')
    }  
})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`)
})