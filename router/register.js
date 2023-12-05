const express = require('express');
const router = express.Router();
const login = require('../controller/login');

const users = require('../controller/register');
router.post('/register',users);
router.post('/login',login);
module.exports = router