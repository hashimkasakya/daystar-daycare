const express = require("express");
const router = express.Router();

// import models

const babyRegistrationModel = require("../models/babyRegistrationModel");


// Routes

router.get('/baby/registerbaby', (req,res)=>{
    res.render("registersitters");
});
// Applying sync await function
router.post('/baby/registerbaby', async (req,res) => {
 try{
    const baby = new babyRegistrationModel(req.body)
    console.log(sitter);
    await baby.save();
    res.send("baby successfully Saved")
 }catch(error){
    res.status(400).send("Soory! Something went wrong");
    console.log("Error registering the baby", error);
 }
});

module.exports = router;