<?php
/* content server to be used with PHP's built-in web server */
// get the q parameter from URL
$q = $_REQUEST["q"];
switch ($q) {
case "slides":
    echo '{"dog": "img_slider/dog.jpg", "bison": "img_slider/bison.jpg", "eagle": "img_slider/eagle.jpg", "lynx": "img_slider/lynx.jpg", "musk_ox": "img_slider/musk-ox.jpg", "porcupine": "img_slider/porcupine.jpg"}';
    break;
default:
    echo "";
    break;
}
?>