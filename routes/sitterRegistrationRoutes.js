const express = require("express");
const router = express.Router();

// import models

const sitterRegistrationModel = require("../models/sitterRegistrationModel");


// Routes

router.get('/registersitter', (req,res)=>{
    res.render("registersitters");
});
// Applying sync await function
router.post('/registersitter', async (req,res) => {
 try{
    const sitter = new sitterRegistrationModel(req.body)
    console.log(sitter);
    await sitter.save();
    res.send("Sitter successfully Saved")
 }catch(error){
    res.status(400).send("Soory! Something went wrong");
    console.log("Error registering the sitter", error);
 }
});

module.exports = router;