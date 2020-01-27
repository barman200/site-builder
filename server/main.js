const express = require('express');

const loginController = require('./controllers/loginController');
const bodyParser = require("body-parser");

let app = express();
let baseUrl = '/api/v1/';

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.listen(3000, () => {
	console.log('node server is running');
});

app.use(baseUrl+'login', loginController);

// default handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



