const express = require("express");
const router = express.Router();

// Import Model
const signupModule = require("../models/signupModel");

// routes

router.get('/signup', (req,res)=>{
    res.render("signup");
});
// Applying sync await function
router.post('/signup', async (req,res) => {
 try{
    const signup = new signupModel(req.body)
    console.log(signup);
    await sitter.save();
    res.send("New signup Successful")
 }catch(error){
    res.status(400).send("Soory! Something went wrong");
    console.log("Error Signing up Try again Later", error);
 }
});

module.exports=router;