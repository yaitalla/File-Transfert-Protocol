const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  token: String,
  uploads: Number,
  downloads: Number,
  data: String
});

module.exports = mongoose.model('User', userSchema);
