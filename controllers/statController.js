const Course = require('../models/courseModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.simpleStat = catchAsync(async (req, res, next) => {
  // await Course.aggregate();

  const nCourse = await Course.count();
  const nUser = await User.count();
  const freeCourse = await Course.count({ price: 0 });

  res.status(200).json({
    status: 'succcess',
    data: {
      nCourse,
      nUser,
      freeCourse,
    },
  });
});
