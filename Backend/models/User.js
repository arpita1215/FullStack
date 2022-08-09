const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name:String,
    age:Number,
    password: String,
    dob: String
})

const savemodel= mongoose.model("user", userModel);

module.exports=savemodel;