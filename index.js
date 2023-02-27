import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cred from './Routes/Users.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8080
mongoose.connect(process.env.DB)
mongoose.connection.once('open',()=>{
    console.log('DB is connected')
})

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/api',cred)

app.listen(port,()=>{
    console.log(`backend is running on port ${port}`)
})