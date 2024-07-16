"use strict";

const navBarContainer = document.querySelector(".nav-bar");
const allNavBarLinks = document.querySelectorAll("a");
const checkbox = document.getElementById("checkbox");
const hamburgerIcon = document.querySelector(".hamburger");
checkbox.checked = false;

let isNavBarExpanded = true;
checkbox.addEventListener("click", () => {
	if (isNavBarExpanded) {
		for (let i = 0; i < allNavBarLinks.length; i++) {
			const currentLink = allNavBarLinks[i];
			setTimeout(() => {
				currentLink.style.opacity = "0";
			}, 100 * i);
		}
		setTimeout(() => {
			hamburgerIcon.style.left = "8px";
		}, 500);

		navBarContainer.style.width = "45px";
		navBarContainer.style.paddingLeft = "0px";
		isNavBarExpanded = false;
	} else {
		for (let i = 0; i < allNavBarLinks.length; i++) {
			const currentLink = allNavBarLinks[i];
			setTimeout(() => {
				currentLink.style.opacity = "1";
			}, 200 * i);
		}
		navBarContainer.style.paddingLeft = "25px";
		hamburgerIcon.style.left = "15px";
		navBarContainer.style.width = "350px";

		isNavBarExpanded = true;
	}
});
