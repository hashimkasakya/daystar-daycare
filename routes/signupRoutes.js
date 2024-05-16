const express = require("express");
const router = express.Router();

// Import Model
const signupModule = require("../models/signupModel");

// routes

router.get("/signup", (req,res)=>{
    res.render("signup");
});

router.post("/signup", (req,res)=>{
    const signup = new signupModule(req.body);
    console.log(signup);
    signup.save();
});

module.exports=router;