console.log("Sanity Check: client JS is working!");

$(document).ready(function(){

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

//$('#photodisplay').html(image);


$('#photodisplay img').attr('src', image);
});

//add a like button to primary and secondary submitted 
var likebtn= ('<button id="like" type="submit" class="form-control">Like</button>' + 
	'<div id="counter"><p>There are currently: 0 Likes for this Submission</p></div>');

//var createForm='';
var sort='';	
//var allFields='';	
//gets the content submitted by primary user
$("#primarySubmit").on('submit', function(e) {
	e.preventDefault();
	console.log('here we are');
	console.log('this: ', $(this)); // should be form
	var formData =$(this).serialize();
	console.log('serializd form data: ', formData); // all the fields submitted
   
    console.log('WTF');

});

var afterdateTime='';
//take secondary submissions and post to original submit
$(".tab-content").on('click', ".submitBtn", function(e){
	e.preventDefault();
	var aftersubmission = $("#userSubmit2").val();
	var submitName2 = $("#submiterName2").val();
	console.log(aftersubmission);

	//get a time stamp for the after submission
	afterdateTime= new Date();
	$('#timeSubmit').attr('value', afterdateTime);

	//add secondary submission below primary submission
	$('#allResponse').append(submiterName2 + '</br>' + aftersubmission + '</br> ' + afterdateTime + ' ' + likebtn);

});

//a like button function counter
$(".tab-content").on('click', "#like", function() {
    $('#counter').html(function(i, val) { 
    	//return + val+1 ;
    	count= val+1;
    	console.log(count);
    	$('#counter p').attr('p' , count);
    	
	});
});

// $('#counter').data('count', 0);
// $('#like').click(function(){
//     $('#counter').html(function(){
//         var $this = $(this),
//             count = $this.data('count') + 1;

//         $this.data('count', count);
//         //return count;
//         $('#counter p').attr(p , count);
//     });
// });

//clickable tabs
$('#inspiTabs a[href="#profile"]').tab('show'); // Select tab by name
$('#inspiTabs a:first').tab('show'); // Select first tab
$('#inspiTabs a:last').tab('show'); // Select last tab

$('#inspiTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

//set default tab showing
$(window).load(function(){
    $('#inspiTabs a[href="#recents"]').tab('show');
});

//set default image tab showing #1
$(window).load(function(){
    $('#inspiSubmits a[href="#tab1"]').tab('show');
});


//create on submit function on form, text drops below as done
// create a new form upon submit that will allow for comments

});
