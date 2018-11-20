const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist/'));
/*
app.get('/', (req, res) => {
  res.send('hello');
});
*/

app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
