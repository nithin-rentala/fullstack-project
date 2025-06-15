const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const captainSchema = new Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength:[3,'first name must be at least 5 character long']
        },
        lastname:{
            type: String,
            minLength:[3,'last name must be at least 5 character long']
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'email must be at least 5 character long'],
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    socketId:{
        type:String,
    },
    status:{
        type: String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minLength:[3,'color must be at least 5 character long']
        },
        plate:{
            type: String,
            required: true,
            minLength:[3,'plate must be at least 5 character long']
        },
        capacity:{
            type: Number,
            required: true,
            minLength:[1,'Capacity must be atleast one']
        },
        vehicleType:{
            type: String,
            required: true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type: Number
        },
        lon:{
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('captainModel',captainSchema);