"use strict";

const eventKeyHTML = document.querySelector(".event-key > p");
const eventKeyCodeHTML = document.querySelector(".event-keycode > p");
const eventCodeHTML = document.querySelector(".event-code > p");

window.addEventListener("keydown", function (key) {
	if (key.code !== "Space") {
		eventKeyHTML.textContent = key.key.toUpperCase();
	} else {
		eventKeyHTML.textContent = "SPACE";
	}

	eventKeyCodeHTML.textContent = key.keyCode;
	eventCodeHTML.textContent = key.code;

	console.log(key);
});
