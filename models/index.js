//connect all models here to server.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/submissions');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("db is open for business");
});

module.exports.Submission = require('./submission.js');
module.exports.SecondarySubmission = require('./secondary.js');