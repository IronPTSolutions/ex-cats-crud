const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  owner: String
});

const Cat = mongoose.model('Cat', schema);

module.exports = Cat;
