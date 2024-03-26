const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        required: true,
    },
    author:{
        type:String,
        required: true,
        unique:true
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
},{timestamp:true})

mongoose.expopts = mongoose.model('comment',commentSchema)