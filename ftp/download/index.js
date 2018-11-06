const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {

  res.download("ftp/download/demi.png");

});


module.exports = router;
