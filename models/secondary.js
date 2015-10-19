var mongoose =require('mongoose');

var Schema = mongoose.Schema;

//data from form created druing primary submit
var SecondarySchema = mongoose.Schema({
	//postNumber:_id, //auto created by mongo?
	name:String, //Name placed in the form field submiterName2
	secondarySubmit:String, //content of writting from form field userSubmit2
	primaryPostId:String, //hidden field that is populated by taking the _ID created by mongo for primary submit
	dateTime:String, //hidden field this auto populated with the time and date upon click of submit button

});


var Secondary = mongoose.model('Secondary', SecondarySchema);

module.exports=Secondary;