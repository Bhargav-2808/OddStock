const jwt = require('jsonwebtoken');
const JWTstr="!@32#$%";

const fetchUser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Authenticate using a valid token"});
    }
    try {
        const data=jwt.verify(token,JWTstr)
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Authenticate using a valid token"});
    } 
}

module.exports=fetchUser;