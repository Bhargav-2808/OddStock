const User=require("../model/User")
const express=require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser= require('../middleware/fetchUser');
const JWTstr="!@32#$%";

// ROUTE:1 To create a new user, if the user does'nt exist.
router.post(('/createuser'),[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min: 3}),
    body('password','Enter a valid password').isLength({min: 3})
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).send({error:"This email ID is already in use, try using another email ID"})
    }
    const saltStr= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(req.body.password,saltStr)
    try {
        user= await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass
        });

        const data={
            user:{
                id:user.id
            }
        }

        const token = jwt.sign(data, JWTstr);
        res.send(token)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Sorry something went wrong."})   
    }
  
});

// ROUTE:2 To authenticate an user.
router.post(('/validateuser'),[
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min: 3})
],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user= await User.findOne({email:req.body.email});
    if(!user){
        return res.status(404).send({error:"Try to loggin using correct credentails."})
    }
    try {
        const passCom=await bcrypt.compare(req.body.password,user.password);
        if(!passCom){
            return res.status(400).json({ errors: "Try to loggin using correct credentails."});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data, JWTstr);
        res.send(token)
        
        res.send(user)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Sorry something went wrong."})   
    }
  
});

// ROUTE:3 To get data of logged-in user.
router.post(('/getuserdata'),fetchUser,async (req, res) => {
    // const {email,password}=req.body;
    try{
        const userData=req.user.id;
        let user = await User.findById(userData).select("-password");
        if(!user){
            return res.status(400).json({ errors: "Enter correct credentials"});
        }
        res.send(user);
    }
    catch(error){
        res.status(500).json({error:"Sorry something went wrong."})
    }

});

module.exports=router;
