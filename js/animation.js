
$(document).ready(function(){
	var y = 150, x = 0, rotateDeg = 0, stepAnimation = 0;
	var checkPoint = 0;
	var startPointX, middlePointX, endPointX,startPointY, middlePointY, endPointY
	
	var interval = setInterval(function() {
		startPointX = -20;		middlePointX = 300; endPointX = 350;
		startPointY = 100; middlePointY = 100; endPointY = 300;
		checkPoint ++;
		y += 25;
		rotateDeg += 10;
		stepAnimation += 0.15; 
		x = Math.pow((1-stepAnimation),2)*startPointX+2*(1-stepAnimation)*stepAnimation*middlePointX+stepAnimation*stepAnimation*endPointX;
		y = Math.pow((1-stepAnimation),2)*startPointY+2*(1-stepAnimation)*stepAnimation*middlePointY+stepAnimation*stepAnimation*endPointY;
		$("#animation")
		.append($('<img>',{id:"img",src:'img/leo_animation.png'})
			.css({"position":"absolute",
				"top":y	+ "px",
				"left":x	+ "px",
				"width":"30px",
				"transform":"rotate("+rotateDeg+"deg)"}))
	}, 750);
	setTimeout(function() {
		clearInterval(interval);
	}, 5500);
})