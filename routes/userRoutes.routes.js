const express = require('express');
const router = express.Router();
const {validateCredentials, Signup} = require('./controllers/user.js');

router.post('/login', validateCredentials);
router.post('/signup', Signup);

module.exports = router;