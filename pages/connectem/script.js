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
	$(".topmiddle").click(rotateShape);
	$(".topright").click(rotateShape);
	$(".middleleft").click(rotateShape);
	$(".middle").click(rotateShape);
	$(".middleright").click(rotateShape);
	$(".bottomleft").click(rotateShape);
	$(".bottommiddle").click(rotateShape);
	$(".bottomright").click(rotateShape);
}


