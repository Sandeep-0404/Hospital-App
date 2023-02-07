const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Dob:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,

    },
    Phone:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true
    },
    Aadhar:{
        type:String,
        required:true,
    },
    DoctorId:{
        type:String,
    },

})

module.exports=mongoose.model("User",userSchema);