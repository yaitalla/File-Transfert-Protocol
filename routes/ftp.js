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

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

router.get('/', (req, res) => {
  res.sendStatus(401).json({
    message: 'admin page'
  });
});

router.post('/upload', (req, res) => {
  if (isEmpty(req.files)) {
    res.redirect('/');
  } else {
    fs.writeFile(__dirname+'/../uploadedFiles/'+req.files.sampleFile.name, req.files.sampleFile.data, function (err) {
      if (err) {
        return res.sendStatus(500).json({
          message: err
        });
      }
      return res.status(200).json({
        success: true,
        message: 'File Uploaded Successfuly'
      });
    });
  }

});


router.post('/download', (req, res) => {
  res.download('./demi.png');
});


router.get('/getUploadedFiles', (req, res) => {
  fs.readdir(__dirname+'/../uploadedFiles', (err, files) => {
    if (err) {
      return res.sendStatus(500).json({
        message: err
      });
    }
    if (isEmpty(files)) {
      console.log('folder is empty');
    } else {
      console.log(files);
    }

    res.redirect('/');
  });
});


module.exports = router;
