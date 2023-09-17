const routes = require("express").Router()

const { Router } = require("express");
const{firstSchema , secSchema , thirdSchema } = require("../models/projects");
const { router } = require("../app");

routes.get("/get-data" , async(req,res)=>{
    try{
        const first = firstSchema.find();
        const sec = secSchema.find();
        const third = thirdSchema.find();
        

        res.status(200).send({
            firstSchema : first,
            secSchema : sec , 
            thirdSchema : third ,
        });

    }catch (error){
        res.status(500).send(error);
    }


});

module.exports = router ;





