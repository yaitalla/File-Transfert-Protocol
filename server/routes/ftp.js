const express = require('express');
const router = express.Router();
const fs = require('fs');

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

router.post('/upload', (req, res) => {
  if (isEmpty(req.files)) {
    console.log('no file')
  }
  res.redirect('/');
});

router.post('/download', (req, res) => {
  console.log("download en cours");
  res.redirect('/');
  //res.download('./demi.png');
});

router.get('/getUploadedFiles', (req, res) => {
console.log("getUploadedFiles ici");
res.redirect('/');
  /*fs.readdir(__dirname+'../uploadedFiles', (err, files) => {
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
  */
});

module.exports = router;
