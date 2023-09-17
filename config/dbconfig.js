const mongoose = require("mongoose");




const connection = mongoose.connection;

connection.on("error" ,()=>{
    console.log("error to connect database");
});


connection.on("connected" ,()=>{
    console.log("conneection Successfull to database");
});

module.exports=connection;