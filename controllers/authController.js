const User = require('../models/User')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { error } = require('console');


//register
exports.register = async (req,res) =>{
    try{
        console.log("jjjjjjjjjjjjjjjjjj")
        const{username,email,password}=req.body
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hashSync(password,salt)
        const newUser= new User({
            username,email,password:hashedpassword
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    }
    catch(error)
    {
        console.log("Error..",error)
        res.status(500).json({message:error.message})
    }
};

//login
exports.login = async (req,res) =>{
    console.log("entered in login function")
    try{
        const user = await User.findOne({email:req.body.email})
        console.log("entered here")
        if(!user)
        {
            return res.status(404).json("User not found!")
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match){
            return res.status(404).json("Wrong password")
        }
        console.log("entered here...")
        const token = jwt.sign({_id: user._id, username: user.username,
             email: user.email},process.env.SECRET,{expiresIn:"5d"})
             const {password,...info} = user._doc
             res.cookie("token",token,{
                httpOnly: true,
                secure: true,
                sameSite:"None",
             }).status(200).json(info)

             console.log("Login Successfuly..")
             console.log("Login Token..",token)
    }
    catch(error)
    {
        res.status(500).json(error)
    }
}