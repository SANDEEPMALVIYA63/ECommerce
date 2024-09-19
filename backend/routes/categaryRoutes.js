const  express = require('express')
const {addCategary} = require('../controller/categaryController')

const router = express.Router();

router.route('/Categary').post(addCategary)

module.exports = router