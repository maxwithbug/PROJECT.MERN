const mongoose = require("mongoose")

const firstSchema = new mongoose.Schema({
    pictureURL:{
        type: String,
        required : true
    },
    title :{
        type : String ,
        required : true
    },
    about :{
        type : String , 
        required : true
    }

});
const secSchema = new mongoose.Schema({
    pictureURL:{
        type: String,
        required : true
    },
    title :{
        type : String ,
        required : true
    },
    about :{
        type : String , 
        required : true
    }

});
const thirdSchema = new mongoose.Schema({
    pictureURL:{
        type: String,
        required : true
    },
    title :{
        type : String ,
        required : true
    },
    about :{
        type : String , 
        required : true
    }

});


module.exports = {
    firstSchema : mongoose.model("first", firstSchema),
    secSchema : mongoose.model("sec", secSchema),
    thirdSchema : mongoose.model("third", thirdSchema),

};