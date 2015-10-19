var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var SubmissionSchema = mongoose.Schema({
	//postNumber:_id, //auto created by mongo?
	name:String, //Name placed in the form field submiterName
	primarySubmit:String, //content of writting from form field userSubmit
	inspiPhoto:String, //hidden field that is populated by image display
	dateTime:String, //hidden field this auto populated with the time and date upon click of submit button

});


var Submission = mongoose.model('Submission', SubmissionSchema);

module.exports=Submission;



// mongoose.model('Submission',{
// 	postNumber:_id, //auto created by mongo?
// 	submiterName:String, //Name placed in the form field submiterName
// 	userSubmit:String, //content of writting from form field userSubmit
// 	imageSelected:String, //hidden field that is populated by image display
// 	timeSubmit:String, //hidden field this auto populated with the time and date upon click of submit button
// });


//data recieved from primarySubmit form
// var SubmissionSchema = new Schema({
// 	content: String,
// 		postNumber: {
// 			type:Schema.ObjectID,
// 			ref: 'postNumber'//auto created by mongo?
// 		},
// 		submiterName: {
// 			type:String,
// 			ref:'submiterName' //Name placed in the form field submiterName
// 		},
// 		userSubmit: {
// 			type:String,
// 			ref:'userSubmit' //content of writting from form field userSubmit
// 		},
// 		imageSelected: {
// 			type:String,
// 			ref:'imageSelected' //hidden field that is populated by image display
// 		},
// 		timeSubmit:{
// 			type:String,
// 			ref:'timeSubmit' //hidden field this auto populated with the time and date upon click of submit button
// 		},
	
	

// });