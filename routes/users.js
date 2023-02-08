const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
const Doctor=require("../models/doctorSchema");
require("dotenv").config();

// ################# Main Page #######################
router.get("/",(req,res)=>
{
    res.send("hi this is hospital management app")
});

//####################### REGISTER USER ###############################

router.get("/api/register",async (req,res)=>
{

    const {Phone,Password}=req.query;
    const queryObject={};

    if(Phone)
    {
        queryObject.Phone=Phone;
    }
    if(Password)
    {
        queryObject.Password=Password;
    }

    console.log("working  with user");
    try{
       const getData=await  User.find(queryObject);
    
        if(getData.length==0)
        {
            res.send("User not found/Password incorrect");
        }
        else
        {
            res.send(getData);
        }
    }catch(e){
        console.log(e);
    }
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

//####################### DOCTOR REGISTRATION ####################################

router.get("/api/doctor",async (req,res)=>
{

    // ###### Query #########
    const {DoctorId,Password,Name,Speciality}=req.query;
    const queryObject={};

    if(DoctorId)
    {
        queryObject.DoctorId=DoctorId;
    }
    if(Password)
    {
        queryObject.Password=Password;
    }
    if(Name)
    {
        queryObject.Name=Name;
    }
    if(Speciality)
    {
        queryObject.Speciality=Speciality;
    }

    console.log("working with doctor");
    try{
       const getData=await Doctor.find(queryObject);
        if(getData.length==0)
        {
            res.send("Doctor not found/Password incorrect");
        }
        else
        {
            res.send(getData);
        }
    }catch(e){
        console.log(e);
    }
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