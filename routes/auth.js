const router = require('express').Router();

router.get('/login', (req, res) => {
    req.send('Login Page')
})

router.get('/logout', (req, res) => {
    req.send('Logout Page')
})

module.exports = router;