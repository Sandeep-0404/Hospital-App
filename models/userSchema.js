const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    adharno:{
        type:String,
        required:true,
        unique:true
    },
    doctorid:{
        type:String,
    },
    role:{
        type:String,
    }

})

module.exports=mongoose.model("User",userSchema);