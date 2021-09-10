const mongoose = require('mongoose');

const databaseURI="mongodb://localhost:27017/oddstock/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectDB=()=>{
    mongoose.connect(databaseURI,()=>{
        console.log("Connected to mongoo successfully");
    })
}

module.exports=connectDB;