const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
//const Post = require('../models/Post')
//const comment = require('../models/Comments')
const verifyToken = require('../verifyToken')
const userController = require('../controllers/userController')


//update with token
router.put("/:id",verifyToken,userController.update)

//update without token
router.put("/:id",userController.updateWithoutToken)

//delete 
router.delete("/:id",userController.deleteUser)

//get by Id
router.get("/:id",userController.getByID)

//get all
router.get("/",userController.getAllUsers)


module.exports=router