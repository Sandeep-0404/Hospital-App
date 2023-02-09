const mongoose=require('mongoose');

const ImageSchema=mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
})

const UserImage=mongoose.model("UserImage",ImageSchema);
module.exports=UserImage;