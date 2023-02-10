const mongoose=require("mongoose");

const Doctor=new mongoose.Schema({
    doctor:{
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
    user:{
        type:String,
    },
    doctors:{
        type:[Doctor],
    }
})
// appUDSchema.plugin(uniqueValidator)

const AppUD=mongoose.model("AppointmentUD",appUDSchema);


module.exports=AppUD;
