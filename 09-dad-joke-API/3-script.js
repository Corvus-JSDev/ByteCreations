"use strict";

const jokeContainer = document.querySelector(".p-tag-joke");
const jokeBtn = document.querySelector(".joke-btn");

function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	// The .then means when this (the fetch get) is finished, then do this
	fetch("https://icanhazdadjoke.com", config)
		.then((res) => res.json())
		.then((data) => (jokeContainer.textContent = data.joke));
}

jokeBtn.addEventListener("click", function () {
	generateJoke();
});
