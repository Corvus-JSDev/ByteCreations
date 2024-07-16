"use strict";

const inputBox = document.querySelector("#choice-input");
const choiceContainerDiv = document.querySelector("#choices-container");

function viewDiv() {
	console.log(choiceContainerDiv.children[1]);
}

function logUserChoicesToTheScreen() {
	for (let i = 0; i < userChoices.length; i++) {
		const element = userChoices[i];

		const choiceToAdd = document.createElement("p");
		choiceToAdd.textContent = element;

		document.querySelector("#choices-container").appendChild(choiceToAdd);
	}
}

function updateChoiceArray() {
	userChoices = [];
	let secondStagingArea = "";

	// sort through the staging area and add every word with a comma to the array
	for (let i = 0; i < userChoiceStagingArea.length; i++) {
		const element = userChoiceStagingArea[i];

		if (element == ",") {
			userChoices.push(secondStagingArea);
			secondStagingArea = "";
		} else {
			secondStagingArea += element;
		}
	}
	// Since there is no closing comma we need this to add the last choice
	userChoices.push(secondStagingArea);

	// remove any leading spaces
	for (let x = 0; x < userChoices.length; x++) {
		let currentChoice = userChoices[x];

		while (currentChoice.charAt(0) === " ") {
			currentChoice = currentChoice.substr(1);
		}

		userChoices[x] = currentChoice;
	}
}

// Print anything inside the userChoices array to the screen
function printChoicesToScreen() {
	// Remove all children nodes
	choiceContainerDiv.innerHTML = "";

	// add the updated values
	for (let i = 0; i < userChoices.length; i++) {
		const element = userChoices[i];

		// create the node and set its value
		const choiceToAdd = document.createElement("p");
		choiceToAdd.textContent = element;

		if (choiceToAdd.textContent === "" || choiceToAdd.textContent === " ") {
			choiceToAdd.classList.add("no-background");
		}

		choiceContainerDiv.appendChild(choiceToAdd);
	}
}

function pickRandomChoice() {
	const maxNumber = choiceContainerDiv.children.length;
	const maxInterval = maxNumber * 3;

	// flashing choice effect
	for (let i = 0; i < maxInterval; i++) {
		setTimeout(() => {
			// reset the classes
			for (let x = 0; x < maxNumber; x++) {
				choiceContainerDiv.children[x].classList.remove("selected-choice");
			}

			const randomNumber = Math.floor(Math.random() * maxNumber);

			choiceContainerDiv.children[randomNumber].classList.add("selected-choice");
		}, 150 * i);
	}
}

let userChoices = [];
let userChoiceStagingArea = "";

inputBox.addEventListener("input", (e) => {
	userChoiceStagingArea = inputBox.value;

	if (e.key !== "Enter") {
		updateChoiceArray();
		printChoicesToScreen();
	}
});

window.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		pickRandomChoice();
	}
});
