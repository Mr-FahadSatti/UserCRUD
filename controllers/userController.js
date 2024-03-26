const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
//const Post = require('../models/Post')
//const comment = require('../models/Comments')
const verifyToken = require('../verifyToken')


//update
exports.update = async(req,res)=>{
    try{
        console.log("moved here 1")
        if(req.body.passsword)
        {
            console.log("moved here 2")
            const salt = await bcrypt.genSalt(10)
            req.body.passsword= bcrypt.hashSync(req.body.passsword,salt)
            console.log("salt :",salt)
            console.log("bcrypt pasword :",req.body.passsword)
        }
        console.log("moved here 3")
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
        {$set: req.body},
        {new: true}
        );
        res.status(200).json(updatedUser)
        console.log("user updated.")
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

//update without token
exports.updateWithoutToken = async (req,res)=>{
        let id = req.params.id.trim(); 
    try {
        const updateuser = await User.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true } // To return the updated document
        );
        if (!updateuser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', updateuser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
    console.log("user updated")

}
//get all users
exports.getAllUsers = async (req,res) =>{
    try{     
        const user = await User.find({});
        res.status(200).json(user);
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
    console.log("get all working")
}

//get by Id
exports.getByID = async (req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {passsword,...info} = user._doc
        res.status(200).json(info)
    }
    catch(error)
    {
        res.status(500).json(error)
    }
    console.log("Get by id working")
}

//delete user
exports.deleteUser = async (req,res)=>{
    console.log("delete function")
    let id = req.params.id.trim();
    try{
        console.log("id:",id)
        const deletedUser= await User.findByIdAndDelete({_id:id});
        //await Post.deleteMany({userId:req.params.id})
        if(!deletedUser)
        {
            return res.status(404).json({ message: 'Can\'t delete! User not found' });
        }
        res.status(200).json({message:'User deleted successfuly',deletedUser})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}
