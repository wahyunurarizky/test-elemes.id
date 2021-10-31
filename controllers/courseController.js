// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const base = require('./baseController');
const Course = require('../models/courseModel');
// const cloudinary = require('../utils/cloudinary');

exports.getAllCourse = base.getAll(Course, [], ['name', 'description']);
exports.createCourse = base.createOne(
  Course,
  'name',
  'price',
  'description',
  'imageCover',
  'category'
);
// exports.createCourse = async (req, res, next) => {
//   console.log(r);
// };
exports.updateCourse = base.updateOne(
  Course,
  'name',
  'description',
  'price',
  'imageCover',
  'category'
);
exports.deleteCourse = base.deleteOne(Course, 'imageCoverId');
exports.getOneCourse = base.getOne(Course);
