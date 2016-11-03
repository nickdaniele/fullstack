var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

// Database Schemas
var testSchema = new Schema({
    stuff: String 
});


// Database Models
var Test = mongoose.model('Test', testSchema);

module.exports = Test;
