const express = require('express');
const router = express.Router();
const token = require('../../config/conf');

function tokenCheck(payload) {
  return (payload === token);
}

router.post('/upload', (req, res) => {
  const tokenVerified = tokenCheck(req.body);
  if (!tokenVerified) {
    console.log('Bad Token');
    return res.status(400).json({
      success: false,
      message: 'bad token'
    });
  }
  return res.status(200).end();
});


module.exports = router;
