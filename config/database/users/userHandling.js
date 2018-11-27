const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User')

async function createNewUser(userData){
  //Validation
  if (await User.findOne({username: userData.username })) {
    throw 'Username "' + userData.username + '" is already taken';
  }
  const user = new User(userData);

  if (userData.password)
    user.hash = bcrypt.hashSync(userData.password, 10);

  await user.save();
}

async function getAllUsers(req, res, next){
  return await User.find().select('-hash');
}


module.exports = {
  createNewUser,
  getAllUsers
}
