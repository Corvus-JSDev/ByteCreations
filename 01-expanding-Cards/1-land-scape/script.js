"use strict";

const singleImg = document.querySelector(".img");
const allImgs = document.querySelectorAll(".img");

allImgs.forEach(function (singleImg) {
	singleImg.addEventListener("click", function () {
		allImgs.forEach(function (otherImg) {
			otherImg.classList.remove("active");
		});

		singleImg.classList.add("active");
	});
});
