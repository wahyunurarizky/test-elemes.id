const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.use(authController.protect); // protect all routes after this point
router.use(authController.restrictTo('admin')); // protect all routes after this point

router
  .route('/')
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router.get('/most-popular', categoryController.mostPopular);
router.route('/:id').get(categoryController.getOneCategory);

//   .patch(
//     authController.restrictTo('superadmin', 'pegawai'),
//     categoryController.update
//   )
//   .delete(
//     authController.restrictTo('superadmin', 'pegawai'),
//     categoryController.delete
//   );

module.exports = router;
