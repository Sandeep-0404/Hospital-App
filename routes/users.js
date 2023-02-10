const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
const Doctor=require("../models/doctorSchema");
const Image=require("../models/randomImagesSchema");
const AppUD=require("../models/appud");
const AppDU=require("../models/appdu");
const multer=require('multer');
const path=require('path');
const UserImage=require("../models/userImages");
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

router.patch("/api/register/:Phone",async(req,res)=>
{
    const Phone=req.params;
try{
   const getData=await User.findOneAndUpdate(Phone,req.body,{new:true},(e,data)=>
   {
    if(e)console.log(e);
    else res.send(data);
   }).clone();
}
catch(e){
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

    const nameObject={};
    const specialityObject={};

    if(Name)
    {
        nameObject.Name={$regex:Name,$options:'i'};
    }
    if(Speciality)
    {
        specialityObject.Speciality={$regex:Speciality,$options:'i'};;
    }

    console.log("working with doctor");
    try{

       const getData=await Doctor.find({
        $or:[queryObject,nameObject,specialityObject]
       });
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

// ################### Random Images #########################

router.get("/api/images",async (req,res)=>
{
    try{
        const getData=await Image.find({});
        res.send(getData);
    }catch(e){
        console.log(e);
    }
  
})


router.post('/api/images',async (req,res)=>
{
    try{
        const addRecord=await new Image(req.body);
        addRecord.save();
        res.status(201).send(addRecord);
    }catch(e)
    {
        console.log(e);
    }
})

// ############# APOINTMENT ################

router.get('/api/appointments/userdoctor',async (req,res)=>
{

    const {user}=req.query;
    const queryObject={};

    if(user)
    {
        queryObject.user=user;
    }

    try{
        const getData=await AppUD.find(queryObject);
        res.send(getData);
    }catch(e){
        console.log(e);
    }
})

router.post('/api/appointments/userdoctor',async (req,res)=>
{
    try{
        const addData=await new AppUD(req.body);
        addData.save();
        res.send(addData);
    }catch(e){
        console.log(e);
    }
})

router.patch('/api/appointments/userdoctor/:user',async (req,res)=>
{
    const user=req.params;
    try{
       const getData=await AppUD.findOneAndUpdate(user,req.body,{new:true},(e,data)=>
       {
        if(e)console.log(e);
        else res.send(data);
       }).clone();
    }
    catch(e){
        console.log(e);
    }
});

router.get('/api/appointments/doctoruser',async (req,res)=>
{
    try{
        const getData=await AppDU.find({});
        res.send(getData);
    }catch(e){
        console.log(e);
    }
})



router.post('/api/appointments/doctoruser',async (req,res)=>
{
    try{
        const addData=await new AppDU(req.body);
        addData.save();
        res.send(addData);
    }catch(e){
        console.log(e);
    }
})

module.exports=router;