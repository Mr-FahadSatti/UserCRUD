// const User = require('../models/User')
// const bcrypt = require('bcrypt');
// const Post = require('../models/Post')
// const Comment = require('../models/Comments')
// const verifyToken = require('../verifyToken');
// const router = require('./auth');
// const { json } = require('body-parser');

// //create
// router.post("/create", verifyToken, async(req, res)=>{
//     try{
//         const newPost =  new Post(req.body)
//         const savedPost = await newPost.save()
//         req.status(200).json(savedPost)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //update
// router.put("/id", verifyToken, async(req, res)=>{
//     try{
//         const updatePost = await Comment.finfByIdAndUpdate(req.params.id,
//             {$set: req.body},{new:true})
//             res.statu(200).json(updatePost)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //delete
// router.delete("/:id", async(req, res)=>{
//     try{
//         await Post.findByIdAndDelete(req.params.id)
//         await Comment.deleteMany({postId: req.params.id})
//         res.status(200).json('Post Deleted')
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //get Post detail
// router.get("/:id", async(req, res)=>{
//     try{
//         const posts = await Post.find(req.params.postId)
//         res.status(200).json(posts)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// //get all posts
// router.get("/", async(req, res)=>{
//     try{
//         const searchfilter = {
//             title:{$regex: express.query.search, $options:"i"}
//         }
//         const posts = await Post.find(express.query.search?searchfilter:null)
//             res.status(200).json(posts)
//     }
//     catch(error)
//     {
//         res.status(500),json(error)
//     }
// })


// //get user post
// router.get("/user/:userId", async(req, res)=>{
//     try{
//         const posts = await Post.find({userId:req.params.postId})
//         res.status(200).json(posts)
//     }
//     catch(error)
//     {
//         res.status(500).json(error)
//     }
// })

// module.exports=router