const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const databaseconnection = require("./connectors/dbconnection");
const USER_MODEL= require("./models/User");
const bcrypt=require("bcrypt");   


// app.get("/post", (req,res)=>{
//     try{
//         res.json({success:true, data:"All the post"});
//     } catch(error){
//         res.json({success:false});  
//     }
// });

// app.get("/msg", (req,res)=>{
//     res.json({success:true, data:"All the messages"});
// });

// app.get("/photo", (req,res)=>{
//     res.json({success:true, data:"All the photo"});
// });

// app.get("/tweet", (req,res)=>{
//     res.json({success:true, data:"All the tweet"});
// });

// app.get("/reply", (req,res)=>{
//     res.json({success:true, data:"All the reply"});
// });

//create operation
app.post("/signup", async (req,res)=>{
    try{
        const {name,age,password,dob}=req.body;
        //code for creating new data
        // const comingdata=req.body;
        // console.log(comingdata);

let encryptpassword = await bcrypt.hash(password,12);

        const newEntry = new USER_MODEL({ name,age,password:encryptpassword,dob
            // name:"Arpita",
            // age:20,
            // password: "yufghu",
            // dob: "25/5/2002"
        })
        // const newUser = new USER_MODEL({
        //     name:comingdata.username,
        //     age:comingdata.userage,
        //     password:comingdata.userpassword,
        //     dob:comingdata.userdob,
        // })
        await newEntry.save();
        res.json({success:true, message: " new data created"})

    }catch(error){
res.status(400).json({success:false, error: error.message})
    }
})




// app.post("/register", (req,res)=>{
//     try{
//         console.log(req.body)
//         res.json({success:true})

//     }catch(error){
// res.status(400).json({success:false})
//     }
// })


// app.post("/contact", (req,res)=>{
//     try{
//         console.log(req.body)
//         res.json({success:true})

//     }catch(error){
// res.status(400).json({success:false})
//     }
// })



// const databaseconnection = async()=>{
//     try {
//        await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");
//        console.log("Data base connected");

//     } catch (error) {
//         console.log(error)
        
//     }
// }

databaseconnection();



let port =5000;
app.listen(port,()=> console.log(`Server is running at ${port}`))