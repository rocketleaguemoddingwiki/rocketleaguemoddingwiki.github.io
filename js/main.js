function changeDisplay(id, type) {

	var element = document.getElementById(id);
	var display = getStyle(element, "display");

	if (display === "none") {
		element.style.display = type;
	} else {
		element.style.display = "none";
	}

}

function getStyle(el, styleProp)
{
	var x = document.getElementById(el);
	if (x.currentStyle)
		var y = x.currentStyle[styleProp];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
	return y;
}