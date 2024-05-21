const express = require("express");
const router = express.Router();

// import models

const dollstoreModel = require("../models/dollstoreModel");

// routes

router.get("/add-doll", (req,res)=> {
    res.render("dollstore");
});
router.post("/add-doll", async (req,res) => {
    try{
        const doll = new dollstoreModel(req.body)
        console.log(doll);
        await doll.save();
        res.send("doll submitted in the system")
    }catch(error){
        res.status(400).send("Sorry! something went wrong");
        console.log("Error registering the doll", error);
    }
});

module.exports=router;