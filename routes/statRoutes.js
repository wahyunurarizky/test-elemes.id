const express = require('express');
const statController = require('../controllers/statController');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.use(authController.protect); // protect all routes after this point
router.use(authController.restrictTo('admin')); // protect all routes after this point

router.get('/simple-statistics', statController.simpleStat);

module.exports = router;
