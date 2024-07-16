"use strict";

// hamburger menu functions for animation
const menuBtn = document.querySelector(".menu-container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const article = document.querySelector(".article-container");
const navLink = document.querySelector(".nav-links");

let menuOpen = false;

menuBtn.addEventListener("click", function () {
	if (!menuOpen) {
		hamburgerMenu.classList.add("open");
		article.classList.add("open-menu-rotation");
		navLink.classList.add("nav-link-transition");
		menuOpen = true;
	} else {
		hamburgerMenu.classList.remove("open");
		article.classList.remove("open-menu-rotation");
		navLink.classList.remove("nav-link-transition");
		menuOpen = false;
	}
});
