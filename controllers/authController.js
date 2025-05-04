const User=require('../models/User')
const {v4:uuidv4} =require('uuid')

const registerUser=async(req,res)=>{
    try{
        const {name, email, phone, address, esewaId, utilityAccounts}=req.body;


        //if user already exists
        const existing =await User.findOne({esewaId});
        if(existing) return res.status(404).json({error:'User already exists'});

        const sessionToken= uuidv4();

        const user=new User({
            name,
            email,
            phone,
            address,
            esewaId,
            sessionToken,
            utilityAccounts,
        });
        
        await user.save();

        res.status(201).json({
            message:'User resistered',
            sessionToken,
            userId:user._id,
        });
    }catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getCurrentUser=async (req,res) =>{
    res.json(req.user);
}

module.exports={
    registerUser,
    getCurrentUser,
};