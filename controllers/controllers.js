const User_Db = require('../models/models')


const getUser = async (req,res)=>{
    const {id} = req.params
    const userToGet = await User_Db.findById({_id:id})
    res.status(200).json({message:"success",user:userToGet})
}

const allUsers = async (req,res)=>{
    const users = await User_Db.find({})
    res.status(200).json({nHits:users.length,Users:users})
}

const addUser = async(req,res)=>{
    const userToAdd = await User_Db.create(req.body)
    res.status(200).json({message:"success", AddedUser:userToAdd})
}

const updateUser = async(req,res)=>{
    const {id} = req.params
    const userToUpdate = await User_Db.findByIdAndUpdate({_id:id},req.body,{
        new:true
    })
    res.status(200).json({message:"success", newUserInfo:userToUpdate})
}

const deleteUser = async(req,res)=>{
    const {id} = req.params
    const userToDelete = await User_Db.findByIdAndDelete(id)
    res.status(200).json({message:"success", deletedUser:userToDelete})
}

module.exports = {
    getUser,allUsers,updateUser,deleteUser,addUser
}