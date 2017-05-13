function loadprotocol(){
	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + $(window).height());
	window.scrollTo(0, 0);
	$(".scene2content").hide();
	// $(".scene3content").hide();
	// alert("Loaded");
}

//Update when scrolling
function updatescroll(){
	var cheat = 50;
	var scrollpos = $(window).scrollTop()
	var windowheight = $(window).height();
	var scene1height = $("#scene1").height();
	var scene2height = $("#scene2").height();
	var scene3height = $("#scene3").height();

	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + windowheight);

// SCENE CONTROLLERS
	// Scene1 Control
	inout("#maintitle", scrollpos, 0, scene1height);

	//Scene2 Control
	inout(".scene2content", scrollpos, scene1height-cheat, (scene1height+scene2height-windowheight+cheat));

	//Scene3 Control
	// inout(".scene3content", scrollpos, (scene1height+scene2height), (scene1height+scene2height+scene3height));

}

//Fade things in and out depending on scroll position
function inout(element, scrollpos, startx, endx){
	if(scrollpos > startx && scrollpos < endx ){
		$(element).fadeIn(200);
	}
	if(scrollpos < startx || scrollpos > endx ){
		$(element).fadeOut(200);
	}
}

//Show and hid FAQ divs
function showandhidefaqdivs(divname){
	// alert("AH");
	// $(divname).show();
	hideallfaqdetails(300);
	$(divname).fadeIn(300);
}

function hideallfaqdetails(rate){
	$("#q1").fadeOut(rate);
	$("#q2").fadeOut(rate);
	$("#q3").fadeOut(rate);
	$("#q4").fadeOut(rate);
	$("#q5").fadeOut(rate);
	$("#q6").fadeOut(rate);
	$("#q7").fadeOut(rate);
}

window.onload=loadprotocol();
$(window).scroll(updatescroll);
hideallfaqdetails(0);


	// $("#maintitle").fadeOut(300);
	// 	$("#scroll").hide();
	// 	$("#header").fadeIn(700);
	// 	$("#footer").fadeIn(700);
	// 	$(".scene2content").fadeIn(1100);
	// 	// $(".scene2content").css('visibility','visible');