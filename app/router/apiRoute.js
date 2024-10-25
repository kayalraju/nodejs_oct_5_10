const express=require('express')
const ApiController = require('../controller/ApiController')
const router=express.Router()


router.post('/create',ApiController.create)
router.get('/',ApiController.getall)



module.exports=router