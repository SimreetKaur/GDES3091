// function rotate (){
// 	var rotation = +10;

// 	$(".topleft").css("rotate", "rotation");

// window.onload=function() {
// 	$(".topleft").click(rotate);
// }

var inc = 90;

function rotateShape(event){
	var shape = event.target;
	var rotate = $(shape).attr('data-rotate');
	rotate = parseInt(rotate) + inc;

	var currentR = $(shape).css('transform', 'rotate('+rotate+'deg)');
	$(shape).attr('data-rotate', rotate);
}

window.onload=function(){
	$(".topleft").click(rotateShape);
	$(".topsecond").click(rotateShape);
	$(".topthird").click(rotateShape);
	$(".topfourth").click(rotateShape);
	$(".secondI").click(rotateShape);
	$(".secondII").click(rotateShape);
	$(".secondIII").click(rotateShape);
	$(".secondIIII").click(rotateShape);
	$(".thirdI").click(rotateShape);
	$(".thirdII").click(rotateShape);
	$(".thirdIII").click(rotateShape);
	$(".thirdIIII").click(rotateShape);
	$(".fourthI").click(rotateShape);
	$(".fourthII").click(rotateShape);
	$(".fourthIII").click(rotateShape);
	$(".fourthIIII").click(rotateShape);
}


