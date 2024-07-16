"use strict";

const userLabel = ["U", "s", "e", "r", "n", "a", "m", "e"];
const passLabel = ["P", "a", "s", "s", "w", "o", "r", "d"];

const htmlUserLabel = document.querySelector(".username-label");
const htmlPassLabel = document.querySelector(".password-label");

userLabel.forEach((letter) => {
	const span = document.createElement("span");
	span.textContent = letter;
	htmlUserLabel.appendChild(span);
});
passLabel.forEach((letter) => {
	const span = document.createElement("span");
	span.textContent = letter;
	htmlPassLabel.appendChild(span);
});

const userSpanSelection = document.querySelectorAll(".username-label span");
const passSpanSelection = document.querySelectorAll(".password-label span");

let userTextIsMoved = false;
let passTextIsMoved = false;
const intervalSpeedOfSpans = 70;

document.querySelector("#username").addEventListener("focus", function () {
	for (let i = 0; i < userSpanSelection.length; i++) {
		let currentSpan = userSpanSelection[i];
		setTimeout(() => {
			currentSpan.style.top = "-30px";
			currentSpan.style.opacity = 1;
		}, i * intervalSpeedOfSpans);
	}
});
document.querySelector("#username").addEventListener("blur", function () {
	// "blur" is the opposite of focus
	if (document.querySelector("#username").value.trim() == "") {
		for (let i = 0; i < userSpanSelection.length; i++) {
			let currentSpan = userSpanSelection[i];
			setTimeout(() => {
				currentSpan.style.top = "0";
				currentSpan.style.opacity = 0.7;
			}, i * intervalSpeedOfSpans);
		}
	}
});
//
//
//
document.querySelector("#password").addEventListener("focus", function () {
	for (let i = 0; i < passSpanSelection.length; i++) {
		let currentSpan = passSpanSelection[i];
		setTimeout(() => {
			currentSpan.style.top = "-30px";
			currentSpan.style.opacity = 1;
		}, i * intervalSpeedOfSpans);
	}
});
document.querySelector("#password").addEventListener("blur", function () {
	// "blur" is the opposite of focus
	if (document.querySelector("#password").value.trim() == "") {
		for (let i = 0; i < passSpanSelection.length; i++) {
			let currentSpan = passSpanSelection[i];
			setTimeout(() => {
				currentSpan.style.top = "0";
				currentSpan.style.opacity = 0.7;
			}, i * intervalSpeedOfSpans);
		}
	}
});

//
//
//
//
//
//
//
//
//
/*
document.querySelector("#username").addEventListener("click", function () {
	for (let i = 0; i < userSpanSelection.length; i++) {
		let currentSpan = userSpanSelection[i];
		setTimeout(() => {
			currentSpan.style.top = "-30px";
			currentSpan.style.opacity = 1;
		}, i * intervalSpeedOfSpans);
	}

	setTimeout(() => {
		userTextIsMoved = true;
	}, intervalSpeedOfSpans * userLabel.length + 100);
});

document.querySelector("#password").addEventListener("click", function () {
	for (let i = 0; i < passSpanSelection.length; i++) {
		let currentSpan = passSpanSelection[i];
		setTimeout(() => {
			currentSpan.style.top = "-30px";
			currentSpan.style.opacity = 1;
		}, i * intervalSpeedOfSpans);
	}

	setTimeout(() => {
		passTextIsMoved = true;
	}, intervalSpeedOfSpans * passLabel.length + 100);
});

window.addEventListener("click", function () {
	if (userTextIsMoved) {
		for (let i = 0; i < userSpanSelection.length; i++) {
			let currentSpan = userSpanSelection[i];
			setTimeout(() => {
				currentSpan.style.top = "0px";
				currentSpan.style.opacity = 0.7;
			}, i * intervalSpeedOfSpans);
		}

		userTextIsMoved = false;
	}

	if (passTextIsMoved) {
		for (let i = 0; i < passSpanSelection.length; i++) {
			let currentSpan = passSpanSelection[i];
			setTimeout(() => {
				currentSpan.style.top = "0px";
				currentSpan.style.opacity = 0.7;
			}, i * intervalSpeedOfSpans);
		}

		passTextIsMoved = false;
	}
});
*/
