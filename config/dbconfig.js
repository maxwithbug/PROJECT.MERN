const mongoose = require("mongoose");


mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error" ,()=>{
    console.log("error to connect database");
});


connection.on("connected" ,()=>{
    console.log("conneection Successfull to databasee");
});

module.exports=connection;