const config = require('./config');
const jwt = require('jsonwebtoken');
const tokenList = {};

//Midlewrare function
// miDDleWARE
const tokenChecker = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'] // || req.body.token
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
      "message": 'Unauthorized access.'
    });
    res.redirect('/login');
  }
}

class Token {
  login (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //check user info
    const fakename = 'yassine';
    const fakepass = 'password';
    if (username && password) {
      if (username === fakename && password === fakepass) {
        const token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '2h'}
        );
        res.json({
          success: true,
          message: 'Successfuly Authenticated',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'authentication failed'
      });
    }
  }
  index(req, res) {
    res.json({
      success: true,
      message:'Index Page'
    });
  }
}


module.exports = {
  tokenChecker,
  Token
};
