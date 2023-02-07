const express=require('express');
const router=express.Router();
const Doctor=require("../models/userSchema");
require("dotenv").config();


router.get("/",async (req,res)=>
{

    const {DoctorId}=req.query;
    const queryObject={};

    if(DoctorId)
    {
        queryObject.DoctorId=DoctorId;
    }

    console.log("working with doctor");
    try{
        console.log(queryObject);
       const getData=await  Doctor.find(queryObject);
        if(getData.length==0)
        {
            res.send("Doctor not found");
        }
        else
        {
            res.send(getData); 
        }
    }catch(e){}
})

router.post('/',async (req,res)=>
{
    try{
        const addRecord=await new Doctor(req.body);
       console.log(addRecord.DoctorId);
        addRecord.save();
        res.status(201).send(addRecord);
    }catch(e)
    {
        console.log(e);
    }
})

router.get('/san',(req,res)=>
{
    res.send("this is my wr=ork");
})

module.exports=router;