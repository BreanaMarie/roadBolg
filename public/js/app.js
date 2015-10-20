console.log("Sanity Check: client JS is working!");

$(document).ready(function(){

//*** photo display information ***
var image='';

//Start with a random inspiration photo 
window.onload= function (){
 	var rand = Math.round((Math.random() * 15) + 1);
 	console.log(rand);
	switch(rand){
		case 1:
		$('#photodisplay img').attr('src' , '/static/images/road1.jpg');
		break;
		case 2:
		$('#photodisplay img').attr('src' , '/static/images/road2.jpg');
		break;
		case 3:
		$('#photodisplay img').attr('src' , '/static/images/road3.jpg');
		break;
		case 4:
		$('#photodisplay img').attr('src' , '/static/images/road4.jpg');
		break;
		case 5:
		$('#photodisplay img').attr('src' , '/static/images/road5.jpg');
		break;
		case 6:
		$('#photodisplay img').attr('src' , '/static/images/road6.jpg');
		break;
		case 7:
		$('#photodisplay img').attr('src' , '/static/images/road7.jpg');
		break;
		case 8:
		$('#photodisplay img').attr('src' , '/static/images/road8.jpg');
		break;
		case 9:
		$('#photodisplay img').attr('src' , '/static/images/road9.jpg');
		break;
		case 10:
		$('#photodisplay img').attr('src' , '/static/images/road10.jpg');
		break;
		case 11:
		$('#photodisplay img').attr('src' , '/static/images/road11.jpg');
		break;
		case 12:
		$('#photodisplay img').attr('src' , '/static/images/road12.jpg');
		break;
		case 13:
		$('#photodisplay img').attr('src' , '/static/images/road13.jpg');
		break;
		case 14:
		$('#photodisplay img').attr('src' , '/static/images/road14.jpg');
		break;
		case 15:
		$('#photodisplay img').attr('src' , '/static/images/road15.jpg');
		break;
	}

	image = $("#photodisplay img").attr('src');

};

//create on thumbnail click full image appears in display to left

$("#photoselector img").on('click', function(e){
	e.preventDefault();
	console.log(this);
	image= $(this).attr('src');


$('#photodisplay img').attr('src', image);
});

// *** Form Information ****

//add a like button to primary and secondary submitted 
var likebtn= ('<button id="like" type="submit" class="form-control like">Like</button>' + 
	'<div id="counter" class="counter"><p>There are currently: 0 Likes for this Submission</p></div>');

var removebtn =('<button id="remove" type="submit" class="form-control remove">remove</button>');


var sort='';	


//gets the content submitted by primary user
$("#primarySubmit").on('submit', function(e){
	e.preventDefault();
	console.log("submit button was clicked");


	//get the image that was used for inspiration
	$('#imageSelected').attr('value', image);

	//get a time stamp for the submission
	var dateTime= new Date();
	$('#timeSubmit').attr('value', dateTime);

	//grab the information populated in the form and combine it to be sent
	var formData = $(this).serialize();
	console.log(formData);

		$.ajax({
	 		url:'/submissions',
	 		type:"POST",
	 		data: formData
	 	})
	 	.done(function(data){
	 		console.log("created primary submission successfuly");

	 	});

	 	var submission = $("#userSubmit").val();
	 	var submitName = $("#submiterName").val();

	//make the submission look like a pretty block of text
	var allFields = ('<div><h2>' +  submitName + '</h2></br><p>' + submission + 
		'</p></br><p align="right">' + dateTime + '</p></div>'); 

	//add a form to primary submission
	var createForm= ('<div><form class="col-sm-offset-1 col-sm-11 afterSubmit">'+
		'<label><h2>Want to Respond to this Writer?</h2></label></br>'+
		'<input id="submiterName2" type="text" name="name" placeholder="Enter Your Name"></input>'+
		'</br><textarea id="userSubmit2"class="form-contol col-sm-offset-1 col-sm-10" rows="5" col="100" placeholder="Enter your response here" name="secondarySubmit"></textarea>'+
		'<input type=" hidden" name= "primaryPostId">'+ this._id +'</input>'+
		'<input id="secondTime" type=" hidden" name= "secondTime"></input>'+
		'<button type="submit" class="form-control submitBtn2">Submit</button></form></div>' +
		'<div id="allResponse"></div>'
		);

	//add submission to recent submissions
	$('#recents').append(allFields + ' Submission inspired by image' + image + '</br>' + likebtn + ' ' + removebtn + ' ' + createForm);

	//create a switch statement that sorts the primary submission by the 
	//image selected and pushes the information into corilating tabs
	// for (var i=0; i < submissions.length; i++) { 
	//  	if (submissions[i].inspiPhoto === "/static/images/road1.jpg") {
	//   <li class="list-group-item">
	//     <h4 class="list-group-item-heading"><%= submissions[i].name %></h4>
	//     <span class='list-group-item-text'><%= submissions[i].primarySubmit %></span>
	//     <span class='list-group-item-text'><%= submissions[i].inspiPhoto %></span>
	//     <span class='list-group-item-text'><%= submissions[i].dateTime %></span>
	//     <button data-id="<%=submissions[i].id %>" type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>

	switch(image){
		case '/static/images/road1.jpg':
		sort= $('#inspi1Submits');
		$('#inspi1Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road2.jpg':
		$('#inspi2Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road3.jpg':
		$('#inspi3Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road4.jpg':
		$('#inspi4Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road5.jpg':
		$('#inspi5Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road6.jpg':
		$('#inspi6Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road7.jpg':
		$('#inspi7Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road8.jpg':
		$('#inspi8Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road9.jpg':
		$('#inspi9Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road10.jpg':
		$('#inspi10Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road11.jpg':
		$('#inspi11Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road12.jpg':
		$('#inspi12Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road13.jpg':
		$('#inspi13Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road14.jpg':
		$('#inspi14Submits').append(allFields + likebtn +createForm);
		break;
		case '/static/images/road15.jpg':
		$('#inspi15Submits').append(allFields + likebtn +createForm);
		break;
	}

});


//add the handler for the delete button
$('#inspiTabs').on('click', 'button.close', function(e){
	e.preventDefault();
	var submissionId =$(this).data().id;
	var deleteSubmission =$(this).closest('li');
		$.ajax({
	    url: '/submissions/' + submissionId,
	    type: 'DELETE',
    	})
    	.done(function(data) {
    		console.log(data);
    		$(deleteSubmission).remove();
    		console.log("Submission has been deleted");
    	})
    	.fail(function(data) {
    		console.log("failed to delete Submission");
    	});
});

var afterdateTime='';
//take secondary submissions and post to original submit
$(".tab-content").on('click', ".submitBtn2", function(e){
	e.preventDefault();
	var aftersubmission = $("#userSubmit2").val();
	var submitName2 = $("#submiterName2").val();
	console.log(aftersubmission);

	//get a time stamp for the after submission
	afterdateTime= new Date();
	$('#secondTime').attr('value', afterdateTime);

	//add secondary submission below primary submission
	$('#allResponse').append(submiterName2 + '</br>' + aftersubmission + '</br> ' + afterdateTime + ' ' + likebtn);

	var secFormData = $(this).serialize();
	console.log(secFormData);

		$.ajax({
	 		url:'/secondary',
	 		type:"POST",
	 		data: secFormData
	 	})
	 	.done(function(data){
	 		console.log("created secondary submission successfuly");
	 	});
});

//a like button function counter
$(".tab-content").on('click', "button.like", function(e) {
	e.preventDefault();
	var submissionId = $(this).data().id;
	var submitlikes = $(this).closest('li');
	console.log(submissionId);
		$.ajax({
	    url: '/submissions/' + submissionId,
	    type: 'PUT',
		})
		.done(function(data) {
			console.log("Submission has been liked");
		})
		.fail(function(data) {
			console.log("failed to like Submission");

		});
});

$('.counter').html(function(i, val) { 
    	//return + val+1 ;
    	var count= val+1;
    	console.log(count);
    	$('.count p').attr('p' , 'There are currently: ' + count + 'Likes for this Submission');
});

//counts the likes upon click
$('.tab-content').data('count', "#counter" ,0);
$('.tab-content').click('#like', function(){
    $('#counter').html(function(){
        var $this = $(this),
            count = $this.data('count') + 1;

        $this.data('count', count);
        //return count;
        $('#counter p').attr('p' , count);
    });
});

//clickable tabs
$('#inspiTabs a[href="#profile"]').tab('show'); // Select tab by name
$('#inspiTabs a:first').tab('show'); // Select first tab
$('#inspiTabs a:last').tab('show'); // Select last tab

$('#inspiTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

//set default tab showing to Most Recent
$(window).load(function(){
    $('#inspiTabs a[href="#recents"]').tab('show');
});

//set default image tab showing #1
$(window).load(function(){
    $('#inspiSubmits a[href="#tab1"]').tab('show');
});



});

//create a function to delete submission
// function deleteSubmission(context) {
//   console.log('context in submission to be deleted: ', context);
//   // context is the button that was clicked
//   var submitId = $(context).attr("data-id");
//   console.log(submitId);
// 	$.ajax({
// 	    url: '/submissions/' + submitId,
// 	    type: 'DELETE',
// 	    success: function(response) {
// 	      // once successful, remove submission from the DOM
// 	      $(context).closest('li').remove();
// 	    }
//   	});
// }
