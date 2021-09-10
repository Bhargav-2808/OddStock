const User=require("../model/User")
const express=require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
    // const secPass="";

    try {
        user= await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        res.send(user)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Sorry something went wrong."})   
    }
  
});

module.exports=router;
