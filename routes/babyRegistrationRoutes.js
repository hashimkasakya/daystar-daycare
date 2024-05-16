const express = require("express");
const router = express.Router();

//IMPORT MODEL
const babiesRegistrationModel = require("../models/babyRegistrationModel");

//routes

router.get("/baby/registerbaby",  (req, res) => {
    res.render("registerbabies");
  });
  // Applying async await function
router.post('/baby/registerbaby', async (req,res) => {
  try {
    const baby = new babiesRegistrationModel(req.body)
    console.log(baby);
    await baby.save();
    res.send("Baby succefully registered")
  } catch(error) { //incase of errors
    res.status(400).send("Sorry! something went wrong");
    console.log("Error registering the baby..", error);
  }
  });
  
module.exports = router;
  