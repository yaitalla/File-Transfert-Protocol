const express = require('express');
const router = express.Router();
const token = require('../../config/conf');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploadedFiles/' })

function tokenCheck(payload) {
  console.log(token, payload)
  return (payload === token);
}

router.post('/', (req, res) => {
  /*
  const tokenVerified = tokenCheck(req.headers.token);
  if (!tokenVerified) {
    console.log('Bad Token');
    return res.status(400).json({
      success: false,
      message: 'bad token'
    });
  }
  */
  if (!req.files.sampleFile) {
    console.log('no files');
    return res.status(400).json({
      success: false,
      message: 'No file'
    });
  }

  let sampleFile = req.files.sampleFile;
  const options = {
    root: __dirname
  };
  /*


  */
  console.log(sampleFile);

    res.download('ftp/uploadedFiles/'+sampleFile.name, function(err) {
      if (err) {
        console.log(err);
        res.redirect('/');
      }
      else {
        console.log('SUCCESS');
        return res.status(200).json({
          success: true,
          message: 'File Uploaded Successfuly'
        });
      }
    });

/*
  sampleFile.mv('./uploadedFiles/'+sampleFile.name, function(err) {
    return res.status(200).json({
      success: true,
      message: 'File Uploaded Successfuly'
    }).end();
  });
*/
});


module.exports = router;
