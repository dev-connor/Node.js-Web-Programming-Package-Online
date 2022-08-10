// @ts-check

const express = require('express')
const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

const USERS = {
    15: {
        nickname: 'foo', 
        profileImage: undefined,
    },
    16: {
        nickname: 'bar', 
        profileImage: undefined,
    },
}

router.get('/', (req, res) => {
    res.send('User list')
    })
    
router.param('id', async (req, res, next, value) => {
    try {
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
        
    } catch (err) {
        next(err)
    }
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
                userId: req.params.id,
                profileImageURL: '/uploads/ed0dcb88284de748529cd638e9193bc4',
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

    router.post('/:id/profile', upload.single('profile'), (req, res, next) => {
        console.log(req.file)

        const { user } = req
        const {filename} = req.file
        user.profileImage = filename
        
        res.send(`User profile image uploaded: ${filename}`)
    })

    module.exports = router