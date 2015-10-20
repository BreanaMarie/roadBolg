var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var SubmissionSchema = mongoose.Schema({
	//postNumber:_id, //auto created by mongo?
	name:String, //Name placed in the form field submiterName
	primarySubmit:String, //content of writting from form field userSubmit
	inspiPhoto:String, //hidden field that is populated by image display
	dateTime:String, //hidden field this auto populated with the time and date upon click of submit button
	like:String //kept track of by counter function
});


var Submission = mongoose.model('Submission', SubmissionSchema);

module.exports=Submission;


