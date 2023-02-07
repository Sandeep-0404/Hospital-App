const User=require("../models/userSchema");
require("dotenv").config();
const connectDB=require("../db/connect");
const Product=require("../models/userSchema");
const ProductJson=require("../users.json");
const start=require("../userDB");

const getAllUsers=async(req,res)=>
{
    const myData=await User.find({});
    res.status(200).send(myData);
}

const postUser=async(req,res)=>
{
   console.log(req.data);
    
}

module.exports={getAllUsers,postUser};