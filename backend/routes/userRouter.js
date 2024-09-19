const express = require('express');
const {userSignup,userLogin}= require('../controller/userController')
const router = express.Router();

router.route('/userSignup').post (userSignup)
router.route('/userLogin').get(userLogin)



module.exports =router