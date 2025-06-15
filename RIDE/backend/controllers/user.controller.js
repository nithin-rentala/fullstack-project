const userModel = require('../models/user.model');
const userService = require('../services/user.services')
const {validationResult} = require('express-validator')
const blacklistModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req,res,next)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }

    const {fullname,email,password} = req.body;
    const hashPassword =await userModel.hashPassword(password);

    const isAlreadyExists =await userModel.findOne({email});
    
    if(isAlreadyExists){
        return res.status(400).send("captain alreday exists");
    }

    const user = await userService.createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashPassword});

    const token = user.generateAuthToken();

    res.status(201).json({token,user});
}

module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }

    const {email,password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).send({message:'Invalid mail or password'});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).send({message:'Invalid mail or password'});
    }

    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});

}

module.exports.getUserProfile= async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        if (!token) {
            return res.status(400).json({ message: "Token is missing" });
        }

        
        await blacklistModel.updateOne(
            { token }, 
            { token }, 
            { upsert: true } 
        );

        res.clearCookie('token');
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

