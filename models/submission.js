var mongoose =require('mongoose');

var Schema = mongoose.Schema;
var SubmissionSchema = new Schema({
	submiterName: String,
	userSubmit: String,
	imageSelected: String,
	timeSubmit:String,

});

var Submission = mongoose.model('Submission', SubmissionSchema);

module.exports=Submission;
