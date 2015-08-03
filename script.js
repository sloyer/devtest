/*
JavaScript Image slideshow:
I studied examples of this code at www.javascriptkit.com so I can't quite
say I invented this wheel. However I did handwrite it with understanding
of what I'm doing.
*/

/* creating images array */
var slideimages=new Array()

function slideshowimages(){
	for (i=0;i<slideshowimages.arguments.length;i++){
		slideimages[i]=new Image()
		slideimages[i].src=slideshowimages.arguments[i]
	}
}

function gotoshow(){
	if (!window.winslide||winslide.closed)
		winslide=window.open(slideimages[whichimage])
	else
		winslide.location=slideimages[whichimage]
		winslide.focus()
}



/* setting the paths of the images */
slideshowimages("images/js-slider/js-slide-batman.png","images/js-slider/js-slide-superman.png","images/js-slider/js-slide-tron.png")

/* setting the speed of the slideshow, in miliseconds */
var slideshowspeed=2000


var whichimage=0

/* defining the slideit func */
function slideit(){
	if (!document.images)
		/* exit if there are no images */
		return
	document.images.slide.src=slideimages[whichimage].src
	if (whichimage<slideimages.length-1)
		/* incrimenting the image var */
		whichimage++
	else
		whichimage=0
		setTimeout("slideit()",slideshowspeed)
}

/* calling the slideit func to slide the next image */
slideit()
