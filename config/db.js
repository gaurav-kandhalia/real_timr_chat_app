const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chatApp').then(()=>{
    console.log("database connected successfully");
}).catch((error)=>{
    console.log("database connection failed",error);
})