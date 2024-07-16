"use strict";

const flipBtn = document.querySelector(".clickable-checkbox");
const loginSignupContainer = document.querySelector(".login-signup-container");
const sliderBeforeElement = document.querySelector(".slider");

let onLogInSide = true;
flipBtn.addEventListener("change", () => {
	if (onLogInSide) {
		loginSignupContainer.classList.remove("rotate-to-login");
		loginSignupContainer.classList.add("rotate-to-signup");
		sliderBeforeElement.style.setProperty("--rotateZ-JS", "-360deg");
		onLogInSide = false;
	} else {
		loginSignupContainer.classList.remove("rotate-to-signup");
		loginSignupContainer.classList.add("rotate-to-login");
		sliderBeforeElement.style.setProperty("--rotateZ-JS", "-80deg");
		onLogInSide = true;
	}
});
