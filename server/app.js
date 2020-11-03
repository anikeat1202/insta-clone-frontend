const express=require("express")
var app=express();
const PORT=3001
const mongoose = require("mongoose");
const { MONGOURI } = require("./src/keys");
//b9LoEpi0HukKfsuA

require("./models/user")

const router = require("./routes/auth")
app.use(express.json())

app.use(router)

mongoose.connect(MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.on("connected",()=>{

console.log("connected to mongo yeahh!!");

})
mongoose.connection.on("error",()=>{

    console.log("err");
    
    })

app.listen(PORT,()=>{

 console.log("server is running on port ",PORT);


})