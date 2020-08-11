const express = require('express')
const router = express.Router()

const newController = require('../app/Controllers/NewsController')


router.use('/:slug',newController.show)

router.use('/',newController.test)



module.exports=router