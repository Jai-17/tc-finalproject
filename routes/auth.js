const router = require('express').Router();
const axios = require('axios');
const urlParse = require('url-parse');
const qs = require('query-string');
require('dotenv').config()

const redirectUri = process.env.REDIRECT_URI

function getGoogleAuthURL(){

    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = {
        redirectUri : redirectUri,
        client_id : process.env.GOOGLE_CLIENT_ID,
        access_type : 'offline',
        response_type : 'code',
        prompt : 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(" "),
    }

    return `${rootUrl}?${qs.stringify(options)}`

}

router.get('/', (req,res) => {
    res.send('Auth Route')
})

router.get('/login', (req, res) => {
    res.redirect(getGoogleAuthURL())
})

router.get('/logout', (req, res) => {
    req.send('Logout Page')
})

module.exports = router;