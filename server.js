// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

//configure files
app.set('view engin', 'ejs');
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


//set up where to render
app.get('/', function(req,res){
	console.log("get is working");
	res.render('index.ejs');
});

//set up an api to post to
app.post("/api/submissions", function(req, res){
	console.log("post is working");
	res.json();
});

//create a listener on a localhost
app.listen(3000, function(){
	console.log("listening on port 3000");
});