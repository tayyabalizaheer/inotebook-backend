const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.get('/', (req,res)=>{
    // const user = User(res.body);
    // user.save();
    // res.json({
    //     success :true,
    //     message : "user register"
    // });
});

router.post('/register',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(403).json({ success: false, errors: errors.array() });
    }
    User.create().then()
    User.create(req.body)
    .then(
        user => res.json({
            success: true,
            message: "user register",
            data: user
        })
    ).catch(
        error => {
            console.log(error); res.status(403).json({
                success: false,
                message: error.message,
                error: error
            })
        } 
    )
    ;
    
});

module.exports = router;