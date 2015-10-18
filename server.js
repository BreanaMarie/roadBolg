// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose=require('mongoose');

//configure files
app.set('view engin', 'ejs');
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/roadBlog');

var PriSubmit =require('./models/submission.js');


//set up where to render
app.get('/', function(req,res){
	console.log("get is working");
	res.render('index.ejs', {submission: submissions});
});

//set where to the api
app.get('/submissions/:id', function(req, res){
	var submission = submissions[req.params.id];
	res.render('submission-show', {submission: submissions});
});

//set up an api to post to
app.post("/api/submissions", function(req, res){
	var submission= req.body;
	Submission.create(submission, function(err, submission){
		res.status(200).json(submission);
	});
	// console.log("post is working");
	// res.json();
});

//create a listener on a localhost
app.listen(3000, function(){
	console.log("listening on port 3000");
});