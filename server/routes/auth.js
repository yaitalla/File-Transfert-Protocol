const express = require('express');
const router = express.Router();
const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const tokenList = {};

//Midlewrare function
// miDDleWARE
const tokenChecker = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'] // || req.query.token || req.body.token
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        console.log({
          "error": true,
          "message": 'Unauthorized access.'
        });
        res.redirect('/login');
      }
      req.decoded = decoded;
      next();
    });
  } else { //pas de token
    console.log({
      "error": true,
      "message": 'No token provided.'
    });
    res.redirect('/login');
  }
}

router.post('/token', (req, res) => {
  //refresh token
  const postData = req.body;
  if ((postData.refreshToken) && (postData.refreshToken in tokenList)) {
    const user = {
      "email": postData.email,
      "name": postData.name
    }
    const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife })
    const response = {
      "token": token
    }
    //add token in the list
    tokenList[postData.refreshToken].token = token;
    res.status(200).json(response);
  } else {
    res.status(404).send('Invalid request');
  }
})

router.post('/login', (req, res) => {
  const { email, name } = req.body;
  const user = {
    email,
    name
  };
  /*
  authentication
  */
  console.log(req.headers)
  const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
  const refreshToken = jwt.sign(user, config.refreshSecret, { expiresIn: config.refreshTokenLife });
  const response = {
    headers: req.headers,
    "status": "Logged in",
    "token": token,
    "refreshToken": refreshToken
  };
  tokenList[refreshToken] = response;
  res.status(200).json(response);
});

module.exports = router;
