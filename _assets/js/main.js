function changeDisplay(id, type) {

	var element = document.getElementById(id);

	if (element.style.display === "none") {
		element.style.display = type;
	} else {
		element.style.display = "none";
	}

}