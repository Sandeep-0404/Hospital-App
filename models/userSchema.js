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
    }

})

const User=mongoose.model("User",userSchema);
const Doctor=mongoose.model("Doctor",doctorList);

module.exports=User;
// module.exports=Doctor;