var express = require('express');
var bodyParser = require('body-parser');
var mongoTestModel = require('../database/database.js'); 

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

// Post to main route
app.post('/test', function(req, res) {
  console.log('Data in express POST : ', req.body.test);

  var newEntry = new mongoTestModel({ stuff: req.body.test });

  newEntry.save(function(err, newEntry) {
    if (err) { return console.error(err) };
  });

  res.send('Express: post request worked!!!');
});

////////////////////////////////////////////////////////////////////////////////

// Set up port to listen on
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
