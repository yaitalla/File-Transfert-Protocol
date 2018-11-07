const express = require('express');
const router = express.Router();
const Usertoken = require('../config/conf');
const fs = require('fs');



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
  fs.writeFile('./uploadedFiles/'+req.files.sampleFile.name, req.files.sampleFile.data, function (err) {
    if (err) throw err;
    return res.status(200).json({
      success: true,
      message: 'File Uploaded Successfuly'
    });
  });
});


router.post('/download', (req, res) => {
  res.download('./demi.png');
});




module.exports = router;
