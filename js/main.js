function changeDisplay(id, type) {

	var element = document.getElementById(id);
	var display = getStyle(element, "display");

	if (display === "none") {
		element.style.display = type;
	} else {
		element.style.display = "none";
	}

}

function getStyle(element, property)
{
	if (element.currentStyle)
		var y = element.currentStyle[property];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
	return y;
}