const mongoose = require('mongoose')
const Schema = mongoose.Schema


const StudentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},
{timestamps:true})
const StudentModel=mongoose.model('student',StudentSchema)

module.exports=StudentModel