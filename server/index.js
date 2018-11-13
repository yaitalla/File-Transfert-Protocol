const express = require('express');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const middleware = require('../config/token');
const authroute = require('./routes/auth');
const helmet = require('helmet');
const app = express();



app.use(helmet());
app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth', authroute);
app.get('/', middleware.tokenChecker, new middleware.Token().index);
app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
