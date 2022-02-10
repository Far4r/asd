var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color = document.querySelector(".generator");
function colorChange() {
	color.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
	/*color.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ");"*/
	css.textContent = color.style.background + ";"
}

color1.addEventListener("input", colorChange)
color2.addEventListener("input", colorChange)