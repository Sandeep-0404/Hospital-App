const mongoose=require("mongoose");


const doctorList=new mongoose.Schema({
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
        required:true,
    },
    Certificate:{
        type:String,
        default:"123random.com"
    },
    Rating:
    {
        type:String,
        required:true,
    },
    Speciality:{
        type:[String]
    }

})


const Doctor=mongoose.model("Doctor",doctorList);
module.exports=Doctor;