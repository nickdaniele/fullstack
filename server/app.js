var express = require('express');
var bodyParser = require('body-parser'); 

// Create instance of express
var app = express();

// Reference static files needed for angular portion of app
app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routing /////////////////////////////////////////////////////////////////////
// Base Route
app.get('/', function (req, res) {
  res.sendFile('../client/index.html');
});

// Post 
app.post('/test', function(req, res) {
  res.send('Express: post request worked!!!');
});

////////////////////////////////////////////////////////////////////////////////

// Set up port to listen on
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
