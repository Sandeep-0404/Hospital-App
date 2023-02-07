require("dotenv").config();
const connectDB=require("./db/connect");
const Product=require("./models/userSchema");
const ProductJson=require("./users.json");

const start=async(data)=>
{
try{
    await connectDB(process.env.MONGODB_URL);
    await Product.create(data);
    console.log("success");

}catch(e)
{
    console.log(e);
}
}

start();
module.exports=start();