const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/ftp');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/ftp', routes);
app.use(express.static('./static'));


app.listen(process.env.port || 4910, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
})
