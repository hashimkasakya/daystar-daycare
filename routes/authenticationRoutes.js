const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req,res)=>{
   res.render("login_page");
});
router.post("/login", passport.authenticate("local", {failureRedirect:"/login"}), (req,res)=>{
   res.redirect("/baby/registerbaby");
});

module.exports=router;