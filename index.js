const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Api-new").then(()=>{
    console.log("database connected");
}).catch(e=>{
    console.log(e);
})
const port = process.env.PORT||3000;


app.listen(port,()=>{
    console.log("Server started at port",port);
})