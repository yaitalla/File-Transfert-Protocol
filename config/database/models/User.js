const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  emil: {
    type: String,
    unique: true,
    required: true
  },
  hashpass: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  token: String,
  uploads: Number,
  downloads: Number,
  data: String
});

module.exports = mongoose.model('User', userSchema);
