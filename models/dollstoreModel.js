const mongoose = require("mongoose");

const dollstoreSchema = new mongoose.Schema({
    dollsname:{
        type:String,
        trim:true
    },
    price:{
        type:String,
        trim:true
    },
    number:{
        type:String,
        trim:true
    }
}); 
module.exports = mongoose.model("dollstoreModel", dollstoreSchema);