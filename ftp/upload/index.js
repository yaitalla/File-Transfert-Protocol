const express = require('express');
const router = express.Router();
const token = require('../../config/conf');

function tokenCheck(payload) {
  console.log(token, payload)
  return (payload === token);
}

router.post('/', (req, res) => {
  console.log('headers', req.headers);
  /*
  const tokenVerified = tokenCheck(req.headers);
  if (!tokenVerified) {
    console.log('Bad Token');
    return res.status(400).json({
      success: false,
      message: 'bad token'
    });
  }
  */
  if (!req.files) {
    console.log('no files');
    return res.status(400).json({
      success: false,
      message: 'No file'
    });
  }
  let sampleFile = req.files.sampleFile;
  sampleFile.mv('/uploadedFiles/', function(err) {
    if (err){
      return res.status(500).send(err);
    }
    return res.status(200).json({
      success: true,
      message: 'File Uploaded Successfuly'
    }).end();
  });

});


module.exports = router;
