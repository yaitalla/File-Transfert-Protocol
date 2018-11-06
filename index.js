const express = require('express');
const bodyParser = require('body-parser');
//const ftpRouter = require('./ftpRoutes')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
/*
app.use('/upload', ftpRouter);
app.use('/download', ftpRouter);
*/

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
