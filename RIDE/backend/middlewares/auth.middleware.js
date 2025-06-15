const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

module.exports.authUser= async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        res.status(401).json({message:'unauthorized'});
    }

    const isBlackListed = await blacklistModel.findOne({token:token});

    if(isBlackListed){
        res.status(401).json({message:'unauthorized'});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user =await userModel.findById(decoded._id);
        req.user = user;
        return next();

    } catch (error) {
        res.status(401).json({message:'unauthorized'});
    }

}

module.exports.authcaptain= async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json({message:'unauthorized token missing '});
    }

    const isBlackListed = await blacklistModel.findOne({token:token});

    if(isBlackListed){
        res.status(401).json({message:'unauthorized and token is in blacklist'});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        res.status(401).json({message:'unauthorized in catch block'});
    }
}