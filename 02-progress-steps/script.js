"use strict";

const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
let stepCount = 1;
let progressBarWidth;
let activeCircle;

const EmptyCirBorderColorCssProp = getComputedStyle(
	document.documentElement,
).getPropertyValue("--line-border-empty");
const FilledCirBorderColorCssProp = getComputedStyle(
	document.documentElement,
).getPropertyValue("--line-border-filled");

const progressStepMap = new Map();
progressStepMap.set(1, "0%");
progressStepMap.set(2, "35%");
progressStepMap.set(3, "65%");
progressStepMap.set(4, "100%");

nextBtn.addEventListener("click", function () {
	stepCount++;
	activeCircle = "cir" + stepCount;
	progressBarWidth = progressStepMap.get(stepCount);

	document.querySelector(".progress-bar").style.width = progressBarWidth;

	if (stepCount > 1) {
		document.getElementById("back").disabled = false;
	}
	if (stepCount == 4) {
		document.getElementById("next").disabled = true;
	}

	document.querySelector("." + activeCircle).style.borderColor =
		FilledCirBorderColorCssProp;
});

backBtn.addEventListener("click", function () {
	document.querySelector("." + activeCircle).style.borderColor =
		EmptyCirBorderColorCssProp;

	stepCount--;
	activeCircle = "cir" + stepCount;
	progressBarWidth = progressStepMap.get(stepCount);

	document.querySelector(".progress-bar").style.width = progressBarWidth;

	if (stepCount == 1) {
		document.getElementById("back").disabled = true;
	}
	if (stepCount < 4) {
		document.getElementById("next").disabled = false;
	}
});
