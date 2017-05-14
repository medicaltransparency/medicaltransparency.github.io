//Get global variables
var cheat = 50; //may change to % of screen2
var scene1height = $("#scene1").height();
var scene2height = $("#scene2").height();
var scene3height = $("#scene3").height();

//Define all elements
var elements = [
{name: "element1",xloc:50,yloc:20,actionin:1,actionout: 12,addlclass:"",inner:"Test"},
{name: "element2",xloc:70,yloc:70,actionin:33,actionout: 56, addlclass:"", inner:"Banana"},
{name: "element3",xloc:30,yloc:80,actionin:33,actionout: 66, addlclass:"textclass", inner:"Orange"}
];

//Define actionpoints and modify array so that it starts below scene1
// var actionpoint = [100,400,900];
// for (var i in actionpoint){
// 	actionpoint[i] += actionpoint[i] + scene1height;
// }

//Load protocol
function loadprotocol(){
	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + $(window).height());
	window.scrollTo(0, 0);
	//load all elements in scene 2
	for (var i in elements){
		$("#scene2").append("<div id = "+elements[i].name+" class = 'scene2content elements "+elements[i].addlclass+"'>"+elements[i].inner+"</div>");		
	}
	$(".scene2content").hide();
	// $(".scene3content").hide();
	// alert("Loaded");

	//load all elements using place element function
	for (var i in elements){
		placeelement('#'+elements[i].name,elements[i].xloc,elements[i].yloc);		
	}
	// placeelement('#element2',70,70);
}

//Places elements
function placeelement(element, xloc, yloc){
//set element location
	$(element).css({'top': yloc+'%', 'left': xloc+'%'});
	$(element).hide();
//hide element
}

//Update when scrolling
function updatescroll(){

	var scrollpos = $(window).scrollTop()
	var windowheight = $(window).height();

	console.log("Scroll:" + $(window).scrollTop());
	console.log("Height:" + windowheight);

// SCENE CONTROLLERS
	// Scene1 Control
	inout("#maintitle", scrollpos, -100, scene1height);

	//Scene2 Control
	inout("#content2", scrollpos, scene1height-cheat, (scene1height+scene2height-windowheight+cheat));
	//set ins and outs for all elements in scene 2
	for (var i in elements){
		inout("#"+elements[i].name, scrollpos, elements[i].actionin/100*scene2height+scene1height, elements[i].actionout/100*scene2height+scene1height);		
	}
	
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