const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a Category must have a name'],
    unique: [true, 'a Category is cannot same as before'],
  },
  description: {
    type: String,
    trim: true,
  },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
