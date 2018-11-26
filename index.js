const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const upload = require('express-fileupload');
const ftp = require('./server/routes/ftp');
const app = express();
const helmet = require('helmet');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/whis", { useNewUrlParser: true}).then(
  () => {console.log('Database connected')},
  err => { console.log('error Database')}
);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload());
app.use(express.static('./dist/'));
app.use('/ftp', ftp);
/*
app.get('/', (req, res) => {
  res.send('hello');
});
*/

app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
