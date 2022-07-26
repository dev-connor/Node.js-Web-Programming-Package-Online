// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * 로컬파일을 데이터베이스로 활용할 예정 (JSON)
 * 인증로직은 넣지 않습니다.
 * RESTful API 를 사용합니다.
 */

const { rejects } = require('assert')
const http = require('http')
const { resolve } = require('path')
const {routes} = require('./api')

const server = http.createServer((req, res) => {
    async function main() {
        const route = routes.find(
            (_route) => 
            req.url && 
            req.method && 
            _route.url.test(req.url) &&
            _route.method === req.method
        )

        if (!req.url || !route) {
            res.statusCode = 404
            res.end('Not found.')
            return 
        }
        
        const regexResult = route.url.exec(req.url)
        
        if (!regexResult) {
            res.statusCode = 404
            res.end('Not found.')
            return 
        }

        /** @type {Object.<string, *> | undefined} */
        const reqBody = 
        (req.headers['content-type'] === 'application/json' && 
        (await new Promise((resolve) => {
            req.setEncoding('utf-8')
            req.on('data', (data) => {
                try {
                    resolve(JSON.parse(data))
                } catch {
                    reject(new Error('Ill-formed json'))

                    
                }
            })
        }))) || 
        undefined

        console.log(reqBody)

        const result = await route.callback(regexResult, reqBody)
        res.statusCode = result.statusCode

        if (typeof result.body === 'string') {
            res.end(result.body)
        } else {
            res.setHeader('Content-Type', 'applcation/json')
            res.end(JSON.stringify(result.body))
        }
        
    }
    main()
})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`)
})