const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { error } = require('console');
const authController = require('../controllers/authController')


//register
router.post("/register",authController.register)

//login
router.post("/login",authController.login)


//logout
// router.get("/logout",async(req,res)=>{
//     try{
//         res.clearCookie("token",{sameSite:'none', secure:true}).status(200).json.send("User logout successfully")
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //refetch
// router.get("/refetch",(req,res)=>{
//     const token= req.cookies.token
//     jwt.verify(token,process.env.SECRET,{},async(error,data)=>{
//         if(error)
//         {
//             return res.status(404).json(error)  
//         }
//         res.status(200).json(data)
//     })
// })

module.exports=router