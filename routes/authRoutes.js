const express=require('express');
const router=express.Router();


const {registerUser,loginUser}=require('../controller')


//POST /api/auth/resgister
router.post('/register',register);

//POST /api/auth/login
router.post('//login',loginUser);;

module.exports=router;
