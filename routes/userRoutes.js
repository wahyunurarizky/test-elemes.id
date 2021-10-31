const express = require('express');
const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

const router = express.Router();

// Authentication
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(authController.protect); // protect all routes (harus login)

router.use(authController.restrictTo('admin')); // Cuma admin yg bisa akses routes dibawah

router.route('/').get(userController.getAllUsers);
router.delete('/deletesoft/:id', userController.deleteSoft);

module.exports = router;
