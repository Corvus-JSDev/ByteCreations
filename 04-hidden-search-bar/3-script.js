"use strict";

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
let hiddenSearchBar = true;

searchBtn.addEventListener("click", function () {
	if (hiddenSearchBar) {
		searchBar.classList.add("hidden-search");
		hiddenSearchBar = false;
	} else {
		searchFunc();
	}
});

function searchFunc() {
	if (searchBar.value.length == 0) {
		document.querySelector(".message").textContent =
			"Sorry There is nothing in the search bar, try again.";
	} else {
		document.querySelector(".message").textContent =
			"Congrats you searched for something!";
	}

	setTimeout(() => {
		document.querySelector(".message").textContent = "";
	}, 3000);
}
