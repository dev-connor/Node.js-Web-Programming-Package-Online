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
    // @ts-ignore
    const user = USERS[value]

    if (!user) {
        const err = new Error('User not found.')
        err.statusCode = 404
        throw err
    }

    // @ts-ignore
    req.user = user
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