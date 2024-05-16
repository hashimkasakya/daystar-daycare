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

// // Routes
// app.post('/add-doll', (req, res) => {
//     const newDoll = new Doll({
//         name: req.body.dollsname,
//         price: req.body.price,
//         number: req.body.number
//     });

//     newDoll.save()
//         .then(() => res.redirect('/dolls_list.html'))
//         .catch(err => res.status(400).send('Error saving doll: ' + err));
// });

// app.get('/dolls', (req, res) => {
//     Doll.find({}, (err, dolls) => {
//         if (err) {
//             res.status(500).send('Error fetching dolls: ' + err);
//         } else {
//             res.json(dolls);
//         }
//     });
// });

module.exports=router;