const express = require('express');
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authControllers');
const upload = require('../utils/multer');

const router = express.Router();

router.use(authController.protect); // protect all routes after this point

router
  .route('/')
  .get(courseController.getAllCourse)
  .post(
    authController.restrictTo('admin'),
    upload.single('imageCover'),
    courseController.createCourse
  );

router
  .route('/:id')
  .get(courseController.getOneCourse)
  .patch(
    authController.restrictTo('admin'),
    upload.single('imageCover'),
    courseController.updateCourse
  )
  .delete(authController.restrictTo('admin'), courseController.deleteCourse);

module.exports = router;
