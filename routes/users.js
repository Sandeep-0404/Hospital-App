const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
const Doctor=require("../models/userSchema");
require("dotenv").config();

router.get("/",async (req,res)=>
{

    const {Phone,Password}=req.query;
    const queryObject={};

    if(Phone)
    {
        queryObject.Phone=Phone;
    }

    console.log("working");
    try{
        console.log(queryObject);
       const getData=await  User.find(queryObject);
        if(getData.length==0)
        {
            res.send("User not found");
        }
        else
        {
            if(Password==getData.Password)res.send(getData);
            else  res.send("wrong password"); 
        }
    }catch(e){}
})

router.post('/',async (req,res)=>
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



// router.get("/doctor",async (req,res)=>
// {
// res.send("hey");
//     const {DoctorId}=req.query;
//     const queryObject={};

//     if(DoctorId)
//     {
//         queryObject.DoctorId=DoctorId;
//     }

//     console.log("working with doctor");
//     try{
//         console.log(queryObject);
//        const getData=await Doctor.find(queryObject);
//         if(getData.length==0)
//         {
//             res.send("Doctor not found");
//         }
//         else
//         {
//             res.send(getData); 
//         }
//     }catch(e){}
// })

// router.post('/doctor',async (req,res)=>
// {
//     try{
//         const addRecord=await new Doctor(req.body);
//        console.log(addRecord.DoctorId);
//         addRecord.save();
//         res.status(201).send(addRecord);
//     }catch(e)
//     {
//         console.log(e);
//     }
// })


router.get('/cricket',(req,res)=>
{
    res.send("hello cricket");
})

module.exports=router;