
// Get the Video Object
var v=document.getElementById("VDYn");


// Show the Adv Box i.e. the DIV
function show_adv() {
	document.getElementById("my_ad").style.visibility="visible";
}

// Hide the Adv Box i.e. the DIV
function hide_adv() {
	document.getElementById("my_ad").style.visibility="hidden";
}

function catch_the_frame() {
	var t;
	t = Math.round(v.currentTime); // currentTime is float; Make it whole number to check
	document.getElementById("seek_status").innerHTML="Current Time: " + t + " seconds"; // Show the current playing time in seconds
	if ( t >= 8 && t <= 18) { // Target Second when we want to show the message/ad
		show_adv(); // Show the message/ad
	}else {


		hide_adv(); // Show the message/ad
	}	
}

hide_adv();
v.addEventListener('playing', function() {setInterval(catch_the_frame,500);}, false);

