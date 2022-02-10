var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.getElementById('list')
function inputLength() {
	return input.value.length
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addAfterCLick() {
	if(inputLength() > 0) {
		createListElement()
	}
}
function addAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}
button.addEventListener("click", addAfterCLick)
input.addEventListener("keypress", addAfterKeyPress)