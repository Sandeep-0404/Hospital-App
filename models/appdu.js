const mongoose=require("mongoose");

const Chats=new mongoose.Schema({
    sender:{
        type:String,
    },
    msg:{
        type:String,
    }
})

const AppointmentDetails=new mongoose.Schema({
   date:{
        type:String,
    },
    problem:{
        type:String,
    },
    image:{
        type:String,
    }
})


const User=new mongoose.Schema({
    user:{
        type:String,
    },
    date:{
        type:String,
    },
    problem:{
        type:String,
    },
    image:{
        type:String,
    },
    status:
    {
        type:String,
    },
    username:{
        type:String,
    },
    doctorname:{
        type:String
    }
})


const appUDSchema=new mongoose.Schema({
    doctor:{
        type:String,
    },
    users:{
        type:[User],
    },
})
// appUDSchema.plugin(uniqueValidator)

const AppUD=mongoose.model("AppointmentDU",appUDSchema);


module.exports=AppUD;
