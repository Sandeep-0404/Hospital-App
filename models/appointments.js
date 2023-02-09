const mongoose=require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const appointmentSchema=new mongoose.Schema({
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
        unique:true
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
appointmentSchema.plugin(uniqueValidator)

const Appointment=mongoose.model("Appointment",appointmentSchema);


module.exports=Appointment;
