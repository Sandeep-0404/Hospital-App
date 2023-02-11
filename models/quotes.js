const mongoose=require('mongoose');

const Quotes=new mongoose.Schema({
    data:{
        type:String,
    },
    author:{
        type:String,
    }
})

const QSchema=mongoose.model('Quote',Quotes);
module.exports=QSchema;