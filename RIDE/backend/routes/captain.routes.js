const captainModel = require('../models/captain.model');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage("Enter a valid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("firtsname must have 3 characters"),
    body('password').isLength({min:6}).withMessage("password must have 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("color must have 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must have 3 characters"),
    body('vehicle.capacity').isInt({min:3}).withMessage("capacity should be atleast one"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("capacity should be atleast one"),
],captainController.registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage("Enter a valid email"),
    body('password').isLength({min:6}).withMessage("password must have 6 characters")
],captainController.loginCaptain)

router.get('/profile',authMiddleware.authcaptain,captainController.getcaptainProfile)
router.get('/logout',authMiddleware.authcaptain,captainController.logout)


module.exports = router;