const express = require('express');
const bodyParser = require('body-parser');
const uploadRoute = require('./ftp/upload');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/upload', uploadRoute);
/*
app.use('/download', ftpRouter);
*/

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
