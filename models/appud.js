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


const Doctor=new mongoose.Schema({
    doctor:{
        type:String,
    },
    appointmentDetails:{
        type:AppointmentDetails,
    },
    chats:{
        type:[Chats],
    }
})


const appUDSchema=new mongoose.Schema({
    user:{
        type:String,
    },
    status:
    {
        type:String,
    },
    doctors:{
        type:[Doctor],
    }
})
// appUDSchema.plugin(uniqueValidator)

const AppUD=mongoose.model("AppointmentUD",appUDSchema);


module.exports=AppUD;
