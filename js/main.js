

function changeDisplay(event, id, type) {

	var element = document.getElementById(id);
	var display = getStyle(element, "display");

	if (display === "none") {
		element.style.display = type;
	} else {
		element.style.display = "none";
	}

	event.preventDefault();

}

function getStyle(element, property){

	// Get the computed property of an element
	// the if statement is here only for Internet Explorer
	if (element.currentStyle) {
		var computedProperty = element.currentStyle[property];
	} else if (window.getComputedStyle) {
		var computedProperty = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
	}

	return computedProperty;
}

function editPage(event, path) {
	var githubPath = "https://github.com/rocketleaguemoddingwiki/rocketleaguemoddingwiki.github.io/blob/master";

	if (path !== "/index.html") {
		path = path.replace(".html", ".md");
	}	

	var pageToOpen = githubPath + path;

	event.preventDefault();

	window.open(pageToOpen, '_blank');
}

function addTagToSearch(event, tag) {
	var element = document.getElementById("search_input");

	if (element.value === "") {
		tag = tag + " "
	} else {
		var lastChar = element.value[element.value.length -1];
		if (lastChar === " ") {
			tag = tag + " "
		} else {
			tag = " " + tag + " "
		}
	}

	element.focus();
	element.value += tag
	element.blur();
	event.preventDefault();
}

function getFocus(element) {
	element.focus();
}

window.onload = function () { 

	// Get the selected menu item, and if it is a submenu item, open the category
	var element = document.getElementById("current_menu_item");

	if (element.classList.contains("js_identifier_submenu_item")) {
		var parent = element.parentElement;
		parent.style.display = "block";
	}
	
}