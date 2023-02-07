const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
const Doctor=require("../models/doctorSchema");
require("dotenv").config();

router.get("/api/register",async (req,res)=>
{

    const {Phone}=req.query;
    const {Password}=req.query;
    const queryObject={};

    //console.log(Phone);

    if(Phone)
    {
        queryObject.Phone=Phone;
    }

    console.log("working");
    try{
        console.log(queryObject);
       const getData=await  User.find(queryObject);
       console.log(getData);
        if(getData.length==0)
        {
            res.send("User not found");
        }
        else
        {
            if(Password===getData.Password)res.send(getData);
            else  res.send("wrong password"); 
        }
    }catch(e){}
})

router.post('/api/register',async (req,res)=>
{
    try{
        const addRecord=await new User(req.body);
       console.log(addRecord.DoctorId);
        addRecord.save();
        res.status(201).send(addRecord);
    }catch(e)
    {
        console.log(e);
    }
})



router.get("/api/doctor",async (req,res)=>
{
//res.send("hey");
    const {DoctorId}=req.query;
    const {Password}=req.query;
    const queryObject={};

    if(DoctorId)
    {
        queryObject.DoctorId=DoctorId;
    }

    console.log("working with doctor");
    try{
        console.log(queryObject);
       const getData=await Doctor.find(queryObject);
        if(getData.length==0)
        {
            res.send("Doctor not found");
        }
        else
        {
            if(Password===getData.Password)res.send(getData);
            else  res.send("wrong password"); 
        }
    }catch(e){}
})

router.post('/api/doctor',async (req,res)=>
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


module.exports=router;