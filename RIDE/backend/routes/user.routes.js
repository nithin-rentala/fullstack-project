const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage("Enter a valid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("firtsname must have 3 characters"),
    body('password').isLength({min:6}).withMessage("password must have 6 characters"),
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Enter a valid email"),
    body('password').isLength({min:6}).withMessage("password must have 6 characters"),
],userController.loginUser)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)



module.exports = router;