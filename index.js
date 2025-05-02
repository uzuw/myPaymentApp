const express=require('express');
const mongoose=require('mongoose');
const cors= require('cors');
const dotenv=require('dotenv');

dotenv.config();
const app=express();

//Middleware 
app.use(cosrs());
app.use(express.json());

//Routes
const authRoutes=require('');
app.use('/api/auth',authRoutes);


//MongoDB Connection 
const connectDB=require('./config/db');
connectDB();

//Start Server 
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running port ${PORT}`));