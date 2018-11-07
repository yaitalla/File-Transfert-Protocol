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
  res.send(req.files.sampleFile.data)
});


router.post('/download', (req, res) => {
  res.download('./demi.png');
});




module.exports = router;
