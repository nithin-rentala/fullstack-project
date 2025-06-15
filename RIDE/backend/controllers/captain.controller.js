const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator')
const captainService = require('../services/captain.services');
const blacklistModel = require('../models/blacklistToken.model')

module.exports.registerCaptain= async(req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;
    const hashPassword =  await captainModel.hashPassword(password);

    const isAlreadyExists = await captainModel.findOne({email});

    if(isAlreadyExists){
        return res.status(400).send("captain alreday exists");
    }

    const captain =await captainService.createCaptain(
        {
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        }
    )

    const token =captain.generateAuthToken();

    res.status(201).json({token,captain});
}

module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }

    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).send({message:'Invalid mail or password'});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).send({message:'Invalid mail or password'});
    }

    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(201).json({token,captain});
}

module.exports.getcaptainProfile = async(req,res,next)=>{
    res.status(200).json(req.captain);
}

module.exports.logout= async(req,res,next)=>{
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
}

