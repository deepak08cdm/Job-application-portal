import mongoose from 'mongoose'


const Schema = mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    dob:{
        require:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    gender:{
        required:true,
        type:String,
        enum:['male','female','trans']
    },
    password:{
        required:true,
        type:String
    },
    confirmPassword:{
        required:true,
        type:String
    }
})

export default mongoose.model('profiles',Schema)