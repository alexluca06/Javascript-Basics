/**
 * Change paragraph content: the text
*/

var isButtonPress = false;
// First option to declare a function
/*
function isPress() {
    if (isButtonPress === false) {
        document.getElementById("mytext").innerHTML = 
            "This is the text after you press the button!";
        isButtonPress = true;
    } else {
        document.getElementById("mytext").innerHTML = 
            "This is the text before to be change using JS";
        isButtonPress = false;
    }

}
*/

// Another option to declare a function in JS
var isPress = function () {
    if (isButtonPress === false) {
        document.getElementById("mytext").innerHTML = 
            "This is the text after you press the button!";
        isButtonPress = true;
    } else {
        document.getElementById("mytext").innerHTML = 
            "This is the text before to be change using JS";
        isButtonPress = false;
    }
}

/*
Change an attribute: from img change src!
*/
function turnOn() {
    document.querySelector('.bulb').src = "./image/pic_bulbon.gif"
}

var turnOff = function () {
    document.querySelector('.bulb').src = "./image/pic_bulboff.gif"
}

/**
 * Change the style of the text using JS: modifying CSS!!
 */

function changeStyle() {
    document.getElementById("myStyle").style = 
        'font-size: 30px; color: red; font-style: italic';
}

var hide = function () {
    document.querySelector(".container").style = 'display: none';
}

var disclose = function () {
    document.querySelector(".container").style = 'display: block';
}