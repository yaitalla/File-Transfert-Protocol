const express = require('express');
const router = express.Router();
const Usertoken = require('../config/conf');


//Middleware function
const uploadToken = (req, res, next) => {
  if (req.headers['token'] !== Usertoken) {  //req.headers['token'] ??
    console.log('Tried to upload with Bad Token');
    return res.sendStatus(400).json({
      message: 'Tried to upload with Bad Token'
    });
    next();
  }
}

//router.use(uploadToken);

router.post('/upload', (req, res) => {
  console.log(req.headers['content-type']);
  res.redirect('/');
});

/*
router.post('/download', (req, res) => {
  res.download("../demi.png");
  res.sendStatus(200).json({
    message: 'File downloaded Successfuly'
  });
});
*/





module.exports = router;
