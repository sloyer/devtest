// animation
var change_slide = function() {

    var status = {
	// setInterval return value
	interval_id : null,
	//distance in pixels from the start of the first image to the start of the last image
	position_reset : 6480,
	// current slide position in pixels
	position : 0,
	// wait for 3 seconds at images, 33 msec * 91 cycles = 3.003 seconds
	loop_wait_reset : 91,
	loop_wait : 91,
	
	//state:
	// 1: keep current image
	// 0: moving in a new image
	state : 1,
	// move image 6 pixels per cycle when in state 0.
	// An image is 1080 pixels wide, and we want to move between images at 1080pixels / 6 seconds.
	// 1080/6 = 180 cycles to move an image, 180 * 33 msec = 5.94 seconds 
	jump: 6,
	svg_group: document.getElementById("i_love_slideshow_svg_g")
    };

    status.svg_group.setAttribute("transform", "translate(0,0)");
    
    var slide_animate = function(that) {
	if(that.state === 1) { 
	    if(that.loop_wait > 0) {
		that.loop_wait--;
	    } else {
		that.state = 0;
		that.loop_wait = that.loop_wait_reset;
		that.position += that.jump;
		that.svg_group.setAttribute("transform", "translate(-" + that.position + ",0)");
	    }
	} else { //currently moving image
	    if(that.position < that.position_reset && that.position % 1080 === 0) {
		// at an intermediate image
		that.state = 1;
	    } else if(that.position < that.position_reset) { //between images
		that.position += that.jump;
		that.svg_group.setAttribute("transform", "translate(-" + that.position + ",0)");
	    } else {		// at last image
		that.svg_group.setAttribute("transform", "translate(0,0)");
		that.position = 0;
		that.state = 1;
	    }
	}
    };

    status.interval_id = window.setInterval(slide_animate, 33, status);
};

window.onload = function() {
    // remove SMIL animations and use JS for non-Mozilla browsers

    // SMIL is detected by modernizr for Chrome, but SMIL doesn't work correctly in Chrome
    var not_firefox = typeof(InstallTrigger) === 'undefined';
    
    if(not_firefox) {
	var animation_group = document.getElementById("i_love_slideshow_svg_g");
	// turn the object returned by getElementsByTagName into a
	// true array from an array-like object, then animations will be an array of nodes 
	var animations = Array.prototype.slice.call(animation_group.getElementsByTagName("animateMotion"));

	var animations_len = animations.length;
	for(var i = 0; i < animations_len; ++i) {
	    animation_group.removeChild(animations[i]);
	}
	
	change_slide();
    }
};
