// Starts slide show in the #slide element
function startSlideShow() {
    var slide = document.getElementById("slide");
    var img_dir = "images/";
    var interval = 5000;
    var images = [];
    var total_imgs = 0;
    var curr_img = 0;
    var next_img = 1;
    
    // Load first image.
    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "dragon.jpg"
    
    // Display image.
    images[0].style.top   = "0px";
    images[0].style.left  = "0px";
    slide.appendChild(images[curr_img]);
    
    // Advance the image in the slide show periodically.
    setInterval(advanceImage, interval);
    
    // Load rest of images.
    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "samurai.jpg"
    
    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "vulcani.jpg"
    
    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "whale.jpg"

    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "harp.jpg"

    images[total_imgs] = new Image();
    images[total_imgs].style.position = "absolute";
    images[total_imgs].style.width    = "100%";
    images[total_imgs++].src = img_dir + "smileys.jpg"

    // Causes the currently shown image to move to the next image.
    function advanceImage() {
        if( images[next_img].complete ) {
            // Place next image to right of current image.
            images[next_img].style.left = images[curr_img].width + "px";
            images[next_img].style.top  = "0px";
            slide.appendChild(images[next_img]);
            
            // Slide current off, and next on.
            swapImages(curr_img, next_img);
            
            curr_img = next_img;
            next_img = ++next_img % total_imgs;
        }
    }

    // Takes indexes to two images.
    // Replaces first image with the second using an animated slide.
    function swapImages(curr, next) {
        var frames = 20;
        var step_size = images[curr].width / frames;
        var curr_frame = 1;
        var animation_length = 1000;
        
        animate();
        
        function animate() {
            // Move images by 1 frame.
            images[curr].style.left = (-curr_frame * step_size) + "px";
            images[next].style.left = (images[curr].width - curr_frame*step_size) + "px";
            ++curr_frame;
            
            if( curr_frame <= frames ) {
                // Set timer for next frame.
                setTimeout(animate, animation_length / frames);
            }
            else slide.removeChild(slide.firstElementChild);
        }
    }
}
