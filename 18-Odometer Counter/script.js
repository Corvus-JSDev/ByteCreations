"use strict";

const youtubeOdometer = document.querySelector("#youtube-odometer");
const twitterOdometer = document.querySelector("#twitter-odometer");
const facebookOdometer = document.querySelector("#facebook-odometer");

window.odometerOptions = {
	format: "(,ddd)",
};

const YouTubeValue = 4678;
const twitterValue = 8427;
const facebookValue = 2932;

setTimeout(() => {
	youtubeOdometer.innerHTML = YouTubeValue;
}, 500);
setTimeout(() => {
	twitterOdometer.innerHTML = twitterValue;
}, 1500);
setTimeout(() => {
	facebookOdometer.innerHTML = facebookValue;
}, 2500);
