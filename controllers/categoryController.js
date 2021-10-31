const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const base = require('./baseController');
const Category = require('../models/categoryModel');
const Course = require('../models/courseModel');

exports.getAllCategory = base.getAll(Category);
exports.createCategory = base.createOne(Category, 'name', 'description');
exports.getOneCategory = base.getOne(Category);

exports.mostPopular = catchAsync(async (req, res, next) => {
  const stats = await Course.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        avgrating: { $avg: '$ratingsAverage' },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 1,
    },
  ]);
  console.log(stats);
  const category = await Category.findById(stats[0]._id);

  res.status(200).json({
    status: 'success',
    data: {
      category: {
        ...category._doc,
        nCourse: stats[0].count,
        avgRating: stats[0].avgrating,
      },
    },
  });
});
