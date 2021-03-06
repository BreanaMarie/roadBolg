// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose=require('mongoose');

//configure files
app.set('view engine', 'ejs');
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// mongoose.connect('mongodb://localhost/roadBlog');

var submissionDb =require('./models');


//set up where to render
app.get('/', function(req,res){
	console.log("get root is working");
	res.redirect('/submissions');
});

//set where to the api
// app.get('/submissions/:_id', function(req, res){
// 	var submission = submissions[req.params._id];
// 	res.render('submission-show', {submission: submissions});
// });

//access the api
app.get('/submissions', function(req, res){
	submissionDb.Submission.find({}, function(err, submissions){
		if (err) console.log(err);
		res.render('index', {submissions: submissions});
	});
});

//set up an api to post primary submissions to
app.post('/submissions', function(req, res) {
	console.log('post request: '+ req.body);
	var submission= req.body;
	submissionDb.Submission.create(req.body, function(err, prisubmit){
		if (err){
			console.log(err);
		}
		res.json(prisubmit);
	});
});

//set up an api to post secondary submissions to
app.post('/secondary', function(req, res) {
	console.log('post request: '+ req.body);
	var secsubmission= req.body;
	submissionDb.Secondary.create(req.body, function(err, secsubmit){
		if (err){
			console.log(err);
		}
		res.json(secsubmit);
	});
});

//set a rout for the like button
app.put('/submissions/:_id', function(req, res){
	var submitlikes = submissionDb.Submission.find({
		_id: req.params._id
	});
	submitlikes.like= submitlikes.like +1;
	console.log("like counter updated");
	res.json("The submission was liked");
});

//set up a delete from the api
app.delete('/submissions/:_id', function(req, res){
	console.log ("the entire " + req.params._id + " has been selected to be delted");
	submissionDb.Submission.find({
		_id: req.params._id
	})
	.remove(function(err, submission){
		console.log("submission delted");
		res.json("That submission is gone");
	});
});



//create a listener on a localhost
app.listen(3000, function(){
	console.log("listening on port 3000");
});