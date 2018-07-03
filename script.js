var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function addButton(body) {
	var btn = document.createElement("Button");
	var t = document.createTextNode("Generate Colors");
	btn.appendChild(t);
	document.body.appendChild(btn);
}

addButton();

var button = document.querySelector("button");

button.addEventListener("click", changeColors);

function randomColor(){ 
	var x=Math.round(0xffffff * Math.random()).toString(16);
	var y=(6-x.length);
	var z="000000";
	var z1 = z.substring(0,y);
	return "#" + z1 + x;
}

function changeColors() {
	var newColor1 = randomColor();
	var newColor2 = randomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ newColor1 
	+ ", " 
	+ newColor2 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);





