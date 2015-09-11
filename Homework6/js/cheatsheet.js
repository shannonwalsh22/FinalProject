/*The following should be included in the head to access jQuery library 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script> */

//Selecting Elements with jQuery
$("<element name, class, id, or XPath>")
	$("p")
	$(".main-nav")
	$("Ul li")

//$(document).raedy() means the code won't run until the document fires a ready event

//Anonymous Functions
function(){
	alert("I am anonymous!");
}

//Callbacks
	//define an anonymous function
	var aFunction = function(){ alert('hello world'); }
	//declare a function that takes another one, does something, and then runs the function
	function somerunner(anyFunction){ console.log(2+2); anyFunction(); }
	//call back regular function
	someRunner(aFunction);

//Document ready
	$(document).ready(
		functoin() {
			alert('The document is ready!');
		}
	);

//Showing and Hiding
	$("body").hide();
	$("body").show();

//Fading in  and out
	$("#section-one").fadeOut(); 
	$("#section-one").fadeIn();

	$("#section-one").fadeOut(1000); //Fade out over 1 second
	$("#section-one").fadeIn(4000); //Fade in over 4 seconds

	$("#section-one").slideUp(1000); //Fade out over 1 second
	$("#section-one").slideDown(4000); //Fade in over 4 seconds

//Animating CSS
	$(".my-element").animate( {   opacity: 0.25,   width: 70% } , 2000 );


//Click Event (fires a callback function upon click)
	$("ul li a").click (
		function(){
			alert('i am clicked');
		}
	);


