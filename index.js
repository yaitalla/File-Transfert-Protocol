const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const uploadRoute = require('./ftp/upload');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload())
app.use('/upload', uploadRoute);
/*
app.use('/download', ftpRouter);
*/
/*
const middleware = (?, ?, ?) => {
    do something
    ?();
}

app.get('/', MIDDLEWARE(), function(req,res){
    res.sendFile(__dirname + '/index.html');
});
*/
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
