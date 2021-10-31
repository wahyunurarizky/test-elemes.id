const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const base = require('./baseController');

// get all user
exports.getAllUsers = base.getAll(User);

// soft delete
exports.deleteSoft = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, { active: false });

  if (!user) {
    return next(new AppError('no users found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: 'null',
  });
});
