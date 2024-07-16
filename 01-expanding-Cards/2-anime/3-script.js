"use strict";

// Don't forget to import jQuery

const allCards = $(".img-container");
const widthOfActiveCard = "4fr";

function switchStatement(value) {
	switch (value) {
		case "char1":
			$(".overall-container").css(
				"grid-template-columns",
				`${widthOfActiveCard} 1fr 1fr 1fr 1fr`,
			);
			break;
		case "char2":
			$(".overall-container").css(
				"grid-template-columns",
				`1fr ${widthOfActiveCard} 1fr 1fr 1fr`,
			);
			break;
		case "char3":
			$(".overall-container").css(
				"grid-template-columns",
				`1fr 1fr ${widthOfActiveCard} 1fr 1fr`,
			);
			break;
		case "char4":
			$(".overall-container").css(
				"grid-template-columns",
				`1fr 1fr 1fr ${widthOfActiveCard} 1fr`,
			);
			break;
		case "char5":
			$(".overall-container").css(
				"grid-template-columns",
				`1fr 1fr 1fr 1fr ${widthOfActiveCard}`,
			);
			break;

		default:
			$(".overall-container").css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr");
			break;
	}
}

const hoverCharNameTime = 200;

allCards.hover(
	function () {
		let charIteration = $(this).attr("class").split(" ").pop(); // true or false
		switchStatement(charIteration);

		setTimeout(() => {
			$(this.children[0]).removeClass("hidden");
		}, hoverCharNameTime);
	},
	function () {
		switchStatement();

		setTimeout(() => {
			$(this.children[0]).addClass("hidden");
		}, hoverCharNameTime);
	},
);
