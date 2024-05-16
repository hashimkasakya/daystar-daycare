const mongoose = require("mongoose");

const babiesRegistrationSchema = new mongoose.Schema({
    babyName:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    age:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    broughtBy:{
        type:String,
        trim:true
    },
    arrivalTime:{
        type:String,
        trim:true
    },
    parentsNames:{
        type:String,
        trim:true
    },
    feepaid:{
        type:String,
        trim:true
    },
    periodofStay:{
        type:String,
        trim:true
    },
    babyNumber:{
        type:String,
        trim:true
    },
    setoffTime:{
        type:String,
        trim:true
    },
});

module.exports = mongoose.model("babiesRegistrationModel", babiesRegistrationSchema);