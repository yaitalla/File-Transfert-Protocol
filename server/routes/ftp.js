const express = require('express');
const router = express.Router();
const fs = require('fs');



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

router.post('/upload', getHeaders, (req, res) => {
  if (isEmpty(req.files)) {
    console.log('no file')
    res.redirect('/');
  } else {
    const srcName = Object.getOwnPropertyNames(req.files)[0];
    fs.writeFile(__dirname+'/../uploadedFiles/'+req.files[srcName].name, req.files[srcName].data, function (err) {
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

router.get('/delete', (req, res) => {
  console.log('deleted');
  res.redirect('/');
  /*
  fs.unlink('path/file.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });
  */
})


module.exports = router;
