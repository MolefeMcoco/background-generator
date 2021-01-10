var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setGradient(){
	body.style.background = "linear-gradient(to right ," + color1.value + " , " + color2.value + ")"; 
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function check(bool){
	return bool;
}

function moveCommand(direction){
	var whatHappens;
	switch(direction){
		case "forward" : whatHappens = "you encountered a monster";
		break;

		case "back" : whatHappens = "You have arrived home";
		break;

		case "left" : whatHappens = "you have found a river";
		break;

		case "right" : whatHappens = "You have a troll";
		break;

		default : whatHappens = "please enter a valid value";
 	}return whatHappens;
}
