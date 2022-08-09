const mongoose=require("mongoose");

const database = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/myowndatabase");
        console.log("Data base Connected");

    } catch (error) {
        console.log(error)
    }
}

module.exports = database;