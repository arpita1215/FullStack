const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const database = require("./connectors/DBconnections");
const MSG_MODEL = require("./models/Message");


app.post("/messages", async (req,res)=>{
    try {
        //code for showing their message
        const comingmsg = req.body;
        console.log(comingmsg);
        const newMsg = new MSG_MODEL({
            name:comingmsg.name,
            msg:comingmsg.msg,
            author:comingmsg.author
        })
        await newMsg.save();
        res.json({success:true, message: " new data created"})

    } catch (error) {
        res.status(400).json({success:false, error: error.message})
    }
})

database();

let port = 6000;
app.listen(port,()=> console.log(`Server is running at ${port}`))