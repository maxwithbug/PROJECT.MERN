const router = require("express").Router();

const{firstSc, secSc , thirdSc } = require("../models/projects");



router.get("/get-data" , async(req,res)=>{

    
    try{
        const firsts = await firstSc.find();
        const secs =  await secSc.find();
        const thirds =  await thirdSc.find();
        

        res.status(200).send({
            firstSc : firsts,
            secSc : secs , 
            thirdSc : thirds ,
        });

    }catch (error){
        res.status(500).send(error);
    }


});

module.exports = router;






