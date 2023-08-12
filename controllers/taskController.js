const mongoose  = require("mongoose");
const taskModel=require("../models/TaskModel")

const createTask=async (req,res)=>{
    const{title,description}=req.body;
try {
    const task=await taskModel.create({title,description});
    res.status(200).json(task);
} catch (error) {
    res.status(400).json({error:error.message});
}
};
///////////
const getTasks=async (req,res)=>{
    try {
        const tasks=await taskModel.find({})
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
//////////
const getSingleTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return  res.status(404).json({message:"Task not found"}) 
    }
    try {
       const singleTask=await taskModel.findById(id)
        res.status(200).json(singleTask);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
/////////////
const updateTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return  res.status(404).json({message:"Task not found"}) 
    }
    try {
       const updatesingleTask=await taskModel.findByIdAndUpdate({
        _id:id
       },{
        ...req.body
       })
      
        res.status(200).json(updatesingleTask);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
//////////
const deleteTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return  res.status(404).json({message:"Task not found"}) 
    }
    try {
       const deletesingleTask=await taskModel.findByIdAndDelete(id)
      
        res.status(200).json(deletesingleTask);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
module.exports={createTask,getTasks,getSingleTask,updateTask,deleteTask};