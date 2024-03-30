const { error } = require('console');
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
   // const tokenString = req.headers['authorization']; 
   //const token = tokenString.split(' ')[1];
    console.log("Token...",token)
    console.log("token.........!", token);
    const token = req.cookier.token
    if (!token) {
        return res.status(404).json('You are not authenticated');
    }
    jwt.verify(token, process.env.SECRET, (error, data) => {
        if (error) {
            res.status(403).json("Token is invalid");
        }
        req.userId = data._id;
        next();
        console.log("moved to next function")
    });
};



module.exports=verifyToken