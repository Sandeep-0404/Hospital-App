require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const PORT= process.env.PORT || 8000;
const user_routes=require('./routes/users');
const connectDB=require("./db/connect");
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:"500mb"}));

// ############## Routes ########################

app.use("/",user_routes);

app.use('/profile',express.static('upload/images'));
// ############## Listen ########################
const start=async()=>
{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>
        {
            console.log('server started at ',PORT);
        })
    }catch(e){
        console.log(e);
        
    }
}


start();