// @ts-check

const express = require('express')

const router = express.Router()

const USERS = {
    15: {
        nickname: 'foo', 
    },
    16: {
        nickname: 'bar', 
    },
}

router.get('/', (req, res) => {
    res.send('User list')
    })
    
    router.param('id', (req, res, next, value) => {
        console.log(`id parameter`, value)
        // @ts-ignore
        req.user = USERS[value]
        next()
    })
    
    // /users/15
    router.get('/:id', (req, res) => {
        const resMimeType = req.accepts(['json', 'html'])
    
        if (resMimeType === 'json') {
            // @ts-ignore
            res.send(req.user)
        } else if (resMimeType === 'html') {
            res.render('user-profile', {
                // @ts-ignore
                nickname: req.user.nickname,
            })
        }
    })
        
    router.post('/', (req, res) => {
        res.send('User registered.')
    })
    
    router.post('/:id/nickname', (req, res) => {
        // req.body: {"nickname": "bar"}
        // @ts-ignore
        const { user } = req
        const { nickname } = req.body
    
        user.nickname = nickname
    
        res.send(`User nickname updated: ${nickname}`)
    })

    module.exports = router