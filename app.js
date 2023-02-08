require('dotenv').config();
const express=require('express');
const app=express();
const PORT= process.env.PORT || 8000;
const user_routes=require('./routes/users');
const connectDB=require("./db/connect");
app.use(express.json());

// ############## Routes ########################

app.use("/",user_routes);



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