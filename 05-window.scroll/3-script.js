"use strict";

const div1 = document.querySelector("#one");
const div2 = document.querySelector("#two");
const div3 = document.querySelector("#three");
const div4 = document.querySelector("#four");
const div5 = document.querySelector("#five");
const div6 = document.querySelector("#six");

/*
window.addEventListener("scroll", () => {
	// this is what gets and prints the scroll position
	let scroll = this.scrollY;
	console.log(scroll);

	function removeOddClass(div) {
		div.classList.remove("odd");
	}
	function addOddClass(div) {
		div.classList.add("odd");
	}
	function removeEvenClass(div) {
		div.classList.remove("even");
	}
	function addEvenClass(div) {
		div.classList.add("even");
	}

	// this is telling it when to display or hide itself
	if (scroll >= 240) {
		div1.style.opacity = 1;
		removeOddClass(div1);
	} else {
		div1.style.opacity = 0;
		addOddClass(div1);
	}

	if (scroll >= 470) {
		div2.style.opacity = 1;
		removeEvenClass(div2);
	} else {
		div2.style.opacity = 0;
		addEvenClass(div2);
	}

	if (scroll >= 680) {
		div3.style.opacity = 1;
		removeOddClass(div3);
	} else {
		div3.style.opacity = 0;
		addOddClass(div3);
	}

	if (scroll >= 890) {
		div4.style.opacity = 1;
		removeEvenClass(div4);
	} else {
		div4.style.opacity = 0;
		addEvenClass(div4);
	}

	if (scroll >= 1020) {
		div5.style.opacity = 1;
		removeOddClass(div5);
	} else {
		div5.style.opacity = 0;
		addOddClass(div5);
	}

	if (scroll >= 1200) {
		div6.style.opacity = 1;
		removeEvenClass(div6);
	} else {
		div6.style.opacity = 0;
		addEvenClass(div6);
	}
});
*/

window.addEventListener("scroll", () => {
	// this is what gets and prints the current scroll position
	let scroll = window.scrollY;
	//console.log(scroll);

	function removeOddClass(div) {
		div.classList.remove("odd");
	}
	function addOddClass(div) {
		div.classList.add("odd");
	}
	function removeEvenClass(div) {
		div.classList.remove("even");
	}
	function addEvenClass(div) {
		div.classList.add("even");
	}

	function updateElement(element, threshold, isOdd) {
		if (scroll >= threshold) {
			element.style.opacity = 1;
			isOdd ? removeOddClass(element) : removeEvenClass(element);
		} else {
			element.style.opacity = 0;
			isOdd ? addOddClass(element) : addEvenClass(element);
		}
	}

	const animateDivElements = [
		{ div: div1, threshold: 240, isOdd: true },
		{ div: div2, threshold: 470, isOdd: false },
		{ div: div3, threshold: 680, isOdd: true },
		{ div: div4, threshold: 890, isOdd: false },
		{ div: div5, threshold: 1020, isOdd: true },
		{ div: div6, threshold: 1200, isOdd: false },
	];

	animateDivElements.forEach(({ div, threshold, isOdd }) => {
		updateElement(div, threshold, isOdd);
	});
});
