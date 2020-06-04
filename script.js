var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
// color1 and color2 is a class, so that's why the syntax is
// .color1 .color2
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");


function setGradient() {
	// The background element is in <body> tag
	// So we much change the linear-gradient values in the body element
	// in the style.css file
	body.style.background = "linear-gradient(to right," 
	+ color1.value + ", " + color2.value  +")";

	// console.log("Set Gradient: " + color1.value);
	// console.log("Set Gradient: " + color2.value);

	css.textContent = body.style.background + ";"
}

function setGradientRandom() {
	// Random hex generator is from:
	// https://css-tricks.com/snippets/javascript/random-hex-color/
	// assign two variables to two random hex colors
	var randcolor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var randcolor2 = "#" + Math.floor(Math.random()*16777215).toString(16);

	body.style.background = "linear-gradient(to right," 
	+ randcolor1 + ", " + randcolor2  +")";

	// console.log("Set RandGradient: " + randcolor1 );
	// console.log("Set RandGradient: " + randcolor2);	

	css.textContent = body.style.background + ";"
}

// add an event listener to the two color inputs
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

//
random.addEventListener("click", setGradientRandom)