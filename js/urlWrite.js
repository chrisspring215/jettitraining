var urlLocation = window.location.href;

function urlWrite() {
	var next = document.getElementById('nextButton');
	var prev = document.getElementById('prevButton');

	var urlPrams = urlLocation.split('?=');
	next.setAttribute('href', next.getAttribute('href') + '?=' + urlPrams[1]);
	prev.setAttribute('href', prev.getAttribute('href') + '?=' + urlPrams[1]);
}

function closeWindow() {
	window.close()
}