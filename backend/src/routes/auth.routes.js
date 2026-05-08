 const express= require('express');
 const authController= require("../controllers/auth.controller");
const router= express.Router();

//    /api/auth/user/register
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);

module.exports = router;