const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a course must have a name'],
    unique: [true, 'a course is cannot same as before'],
    trim: true,
    maxlength: [40, 'a course name must have less or equal than 40 characters'],
    minlength: [10, 'a course name must have more or equal than 10 characters'],
  },

  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'a ratings average must be above 1.0'],
    max: [5, 'a ratings average must be below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'a course must have a price'],
  },

  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'a course must have a cover image'],
    default: 'default.jpg',
  },
  imageCoverId: String,
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: [true, 'tour must belong to a Category'],
  },
});

courseSchema.index({ price: 1, ratingsAverage: -1 });

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name',
  });
  next();
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
