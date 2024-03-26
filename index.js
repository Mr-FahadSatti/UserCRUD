const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Load environment variables
const cors = require('cors');//security feature implemented by browsers to prevent malicious websites from making unauthorized requests to other sites.
const multer = require('multer');
const path = require('path')
const cookieParser= require('cookie-parser')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')
const userRoute = require('./routes/user')

app.use(cors());
const corsOptions = {
    origin: '*',
    credentials: true
}
app.use(cors(corsOptions))

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL); // Use await to ensure connection before proceeding
        console.log('DataBase Connected Successfuly');
    } catch (error) {
        console.log('Error:', error);
    }
}
//middleware
dotenv.config();
app.use(express.json());

// app.use("/images", express.static(path.json(__dirname,"/images")))
// console.log(cors())

// app.use(cookieParser())
 app.use("/api/auth",authRoute)
 app.use("/api/users",userRoute)
// app.use("/api/posts",postRoute) 
// app.use("/api/comments",commentRoute)

//upload img
// const storage = multer.diskStorage({
//     destination:(req,file,fn) => {
//         fn(null,"images")
//     },
//     filename: (req,file,fn)=>{
//         fn(null,req.body.img)
//     }
// })
// const upload= multer ({storage:storage})
// app.post("api/upload",upload.single("file"),(req,res)=>{
//     res.status(200).json('Image uploaded successfuly')
// })

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('app is running on port' + process.env.PORT);
});
