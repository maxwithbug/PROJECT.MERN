const mongoose = require("mongoose");


console.log("hello")

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error" ,()=>{
    console.log("error to connect database");
});


connection.on("connected" ,()=>{
    console.log("conneection Successfull to database");
});

module.exports=connection;