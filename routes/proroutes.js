const router = require("express").Router();

const{firstSchema , secSchema , thirdSchema } = require("../models/projects");



router.get("/get-data" , async(req,res)=>{

    
    try{
        const first = await firstSchema.find();
        const sec =  await secSchema.find();
        const third =  await thirdSchema.find();
        

        res.status(200).send({
            firstSchema : first,
            secSchema : sec , 
            thirdSchema : third ,
        });

    }catch (error){
        res.status(500).send(error);
    }


});

module.exports = router;






