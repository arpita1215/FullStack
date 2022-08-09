const mongoose = require("mongoose");

const msgModel = new mongoose.Schema({
    name:String,
    msg:String,
    author:String
})

const savemodel = mongoose.model("user",msgModel);

module.exports= savemodel;