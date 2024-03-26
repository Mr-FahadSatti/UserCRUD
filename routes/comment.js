// const User = require('../models/User')
// const bcrypt = require('bcrypt');
// const Post = require('../models/Post')
// const Comment = require('../models/Comments')
// const verifyToken = require('../verifyToken');
// const router = require('./auth');

// //create
// router.post("/create", verifyToken, async(req, res)=>{
//     try{
//         const newComment =  new Comment(req.body)
//         const savedComment = await newComment.save()
//         req.status(200).json(savedComment)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //update
// router.put("/id", verifyToken, async(req, res)=>{
//     try{
//         const updateComment = await Comment.finfByIdAndUpdate(req.params.id,
//             {$set: req.body},{new:true})
//             res.statu(200).json(updateComment)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //delete
// router.delete("/:id", async(req, res)=>{
//     try{
//         await Comment.findByIdAndDelete(req.params.id)
//         res.status(200).json('Comment Deleted')
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //get comment
// router.get("/post/:postId", async(req, res)=>{
//     try{
//         const comments = await Comment.find({postId:req.params.postId})
//         res.status(200).json(comments)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// module.exports=router