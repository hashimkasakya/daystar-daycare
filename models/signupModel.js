const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
});
module.exports=mongoose.model("signupModel", signupSchema);
