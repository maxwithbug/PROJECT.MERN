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
    firstSc : mongoose.model("firsts", firstSchema),
    secSc : mongoose.model("secs", secSchema),
    thirdSc : mongoose.model("thirds", thirdSchema),

};