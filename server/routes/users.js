const express = require('express');
const router = express.Router();
const userHandling = require('../../config/database/users/userHandling');

router.post('/register', register);
router.get('/', getAllUsers);

function getAllUsers(req, res, next) {
  userHandling.getAllUsers()
              .then(users => res.json(users))
              .catch(err => next(err));
}

function register(req, res, next) {
  userHandling.create(req.body)
              .then(() => res.json({}))
              .catch(err => next(err));
}

module.exports = router;
