const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
require("dotenv").config();

//hello
router.get("/",async (req,res)=>
{

    const {Name}=req.query;
    const queryObject={};

    if(Name)
    {
        queryObject.Name=Name;
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
            res.send(getData); 
        }
    }catch(e){}
})

router.post('/',async (req,res)=>
{
    try{
        const addRecord=await new User(req.body);
       // console.log(addRecord);
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