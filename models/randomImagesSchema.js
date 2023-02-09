const mongoose=require("mongoose");


const imagesList=new mongoose.Schema({
   url:{
    type:String,
    required:true
   }
})


const Image=mongoose.model("Image",imagesList);
module.exports=Image;