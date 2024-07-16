"use strict";

const cardSelector = document.querySelectorAll(".QandA-Card");
const imgCardSelector = document.querySelectorAll(".QandA-Card img");

cardSelector.forEach((selectedCard, index) => {
	selectedCard.addEventListener("click", () => {
		const expandedCard = cardSelector[index].classList.contains("compact");

		cardSelector.forEach((element) => {
			element.classList.add("compact");
			imgCardSelector.forEach((element) => {
				element.src = "icons/icons8-expand-arrow-64.png";
				element.style.width = "30px";
				element.style.left = "445px";
			});
		});

		if (expandedCard) {
			cardSelector[index].classList.remove("compact");
			imgCardSelector[index].src = "icons/icons8-close.svg";
			imgCardSelector[index].style.width = "25px";
			imgCardSelector[index].style.left = "448px";
		}
	});
});
