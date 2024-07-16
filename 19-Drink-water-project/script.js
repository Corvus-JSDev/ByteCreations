"use strict";

const smallCups = document.querySelectorAll(".cup-small");
const litersRemaining = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");
const confettiCanvas = document.querySelector("#confetti-canvas");
const jsConfetti = new JSConfetti();

function highlightCups(idx) {
	// This is the condition that will remove the fill class if the cup that is clicked on is already filled
	if (smallCups[idx].classList.contains("full")) {
		idx--;
	}

	// This is the condition that will apply the fill class to all the other cups before it, if they are not already filled
	smallCups.forEach((cup, index) => {
		if (index <= idx) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});

	updateBigCup();
}

smallCups.forEach((cup, idx) => {
	cup.addEventListener("click", () => highlightCups(idx));
});

function updateBigCup() {
	const fullCups = document.querySelectorAll(".cup-small.full").length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = "hidden";
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remaining.style.visibility = "hidden";
		remaining.style.height = 0;

		jsConfetti.addConfetti();
	} else {
		remaining.style.visibility = "visible";
		litersRemaining.textContent = `${2 - (250 * fullCups) / 1000}L`;
	}
}
