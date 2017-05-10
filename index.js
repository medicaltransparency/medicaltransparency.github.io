// if(document.body.scrollTop > 1000){
// 	alert("too far!");
// }

// $("#scene2").height($(window).height());

function onload(){
	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + $(window).height());
	// console.log("Width:" + $(window).width());

	var scrollpos = $(window).scrollTop()
	var windowheight = $(window).height();

	// Create a buffer so that there is enough room for the header
	$("#headerbuffer").height($("#header").height()*1.3);
	// Make sure that scene2 is big enough to appear
	if($("#scene2").height() < $(window).height()){
		$("#scene2").height($(window).height()+10);
	}

	//Update when scrolling
	if(scrollpos > (5000)){
		$("#maintitle").hide();
		$("#scroll").hide();
		$("#header").show();
		$("#footer").show();
		$(".scene2content").show();
		// $(".scene2content").css('visibility','visible');

	}
	else{
		$("#maintitle").show();
		$("#scroll").show();
		$("#header").hide();
		$("#footer").hide();
		$(".scene2content").hide();
		// $(".scene2content").css('visibility','hidden');		
	}
}

function updatescroll(){
	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + $(window).height());
	// console.log("Width:" + $(window).width());

	var scrollpos = $(window).scrollTop()
	var windowheight = $(window).height();

	// Create a buffer so that there is enough room for the header
	$("#headerbuffer").height($("#header").height()*1.7);
	// Make sure that scene2 is big enough to appear
	if($("#scene2").height() < $(window).height()){
		$("#scene2").height($(window).height()+10);
	}

	//Update when scrolling
	if(scrollpos > $("#scene1").height()){
		$("#maintitle").fadeOut(300);
		$("#scroll").hide();
		$("#header").fadeIn(700);
		$("#footer").fadeIn(700);
		$(".scene2content").fadeIn(1100);
		// $(".scene2content").css('visibility','visible');

	}
	else{
		$("#maintitle").fadeIn(500);
		$("#scroll").show();
		$("#header").fadeOut(500);
		$("#footer").fadeOut(500);
		$(".scene2content").fadeOut(500);
		// $(".scene2content").css('visibility','hidden');		
	}
}

$(window).ready(onload);
$(window).scroll(updatescroll);