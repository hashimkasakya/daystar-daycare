const mongoose = require("mongoose");

const sitterRegistrationSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    dob:{
        type:Date,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    nextofKin:{
        type:String,
        trim:true
    },
    nin:{
        type:String,
        trim:true
    },
    recommender:{
        type:String,
        trim:true
    },
    religion:{
        type:String,
        trim:true
    },
    education:{
        type:String,
        trim:true
    },
    sitterNumber:{
        type:String,
        trim:true
    },
    contacts:{
        type:Number,
        unique:true
    }
});


module.exports=mongoose.model("sitterRegistrationModel", sitterRegistrationSchema);