const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongodb = require('./db/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user.routes');
const captainRouter = require('./routes/captain.routes');

mongodb();


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("hello");
})


app.use('/users',userRouter);
app.use('/captain',captainRouter);


module.exports = app;