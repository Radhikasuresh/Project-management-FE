const express=require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const app=express()
const taskRoutes=require('./routes/taskRoute')
const cors=require("cors")
// app.get("/",(req,res)=>{
//     res.send("Hello");
// });
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("DB connected and Listening to"+" "+process.env.PORT)
    }); 
}).catch((err)=>console.log(err))
app.use(express.json())

app.use(cors())
app.use("/api/tasks",taskRoutes)
// app.use((req,res,next)=>{
//     console.log("path"+req.path+"method"+req.method)
//     next()
// })
