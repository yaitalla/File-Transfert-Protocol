const express = require('express');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const middleware = require('../config/token');
const authroute = require('./routes/auth');
const helmet = require('helmet');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'yassine',
  password: 'whis',
  database: ''
});
/*
connection.connect(err => {
  if (err) {
    console.log('error database')
    return err;
  }
});
*/

app.use(helmet());
app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth', authroute);
app.use(express.static('../client/'))
app.get('/', middleware.tokenChecker);
app.get('/login', (req, res) => {
  res.send('login')
  /*connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  });
  */
});
app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
