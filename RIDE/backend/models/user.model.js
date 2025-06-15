const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'first name must be at least 5 character long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'last name must be at least 5 character long'],
        }
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
    }
})

userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('user',userSchema);
