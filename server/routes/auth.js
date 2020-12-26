const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    const {username, password} = req.body

    if(username === process.env.USERNAME){
        if(password === process.env.PASSWORD){
            const user = {
               username
            }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json({
                message: 'Successfuly logged in',
                accessToken
            })
        }
    } else {
        res.status(400).json({message: "Wrong credentials."})
    }
})

module.exports = router