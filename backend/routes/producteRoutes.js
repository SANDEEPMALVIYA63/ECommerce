const express = require('express')
const {AddProducte} = require('../controller/producteController')
const  router = express.Router();

router.route('/AddProducte').post(AddProducte)
module.exports = router ; 


