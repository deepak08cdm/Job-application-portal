import express from "express";
import ProfileSchema from '../modules/Profile.js'
import jwt from 'jsonwebtoken';

const router = express.Router()

router.post('/createUser',async(req,res)=>{
    const data = req.body
    const existing = await ProfileSchema.find({email:data.email})
    if(existing.length>0){
        res.status(400).send('email id already registered')
    }
    else{
        const register = await ProfileSchema.create(data)
    }
})

router.post('/login',async(req,res,next)=>{
    const data = req.body
    const user = await ProfileSchema.find(data)
    if(user.length>0){
        req.body = {data,user}
        next()
    }
    else{
        res.status(400).send('invalid credentials')
    }
},(req,res)=>{
    const user = req.body.user[0]
    console.log(req.body.user[0])
    const token = `bearer%${jwt.sign(user.toJSON(),process.env.SECRET)}`
    res.cookie('token',token).send({
        token,
        user
    })
})

router.get('/profiles',async(req,res)=>{
    const data = await ProfileSchema.find()
    res.send(data)
})

export default router