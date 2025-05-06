const express=require('express');
const router=express.Router();


const {registerUser,getCurrentUser}=require('../controllers/authController')
const sessionAuth = require('../middleware/sessionAuth');


//POST /api/auth/resgister
router.post('/register',registerUser);

//POST /api/auth/login
router.post('/me',sessionAuth, getCurrentUser);

module.exports=router;
