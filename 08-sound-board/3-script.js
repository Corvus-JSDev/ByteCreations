"use strict";

const soundEffBtn1 = document.querySelector("#sound-effect-1");
const soundEffBtn2 = document.querySelector("#sound-effect-2");
const soundEffBtn3 = document.querySelector("#sound-effect-3");
const soundEffBtn4 = document.querySelector("#sound-effect-4");
const soundEffBtn5 = document.querySelector("#sound-effect-5");
const soundEffBtn6 = document.querySelector("#sound-effect-6");

const audio = document.querySelectorAll("audio");

function stopAllSounds() {
	audio.forEach((sound) => {
		sound.pause();
		sound.currentTime = 0;
	});
}

soundEffBtn1.addEventListener("click", function () {
	stopAllSounds();
	audio[0].play();
});
soundEffBtn2.addEventListener("click", function () {
	stopAllSounds();
	audio[1].currentTime = 1;
	audio[1].play();
});
soundEffBtn3.addEventListener("click", function () {
	stopAllSounds();
	audio[2].play();
});
soundEffBtn4.addEventListener("click", function () {
	stopAllSounds();
	audio[3].play();
});
soundEffBtn5.addEventListener("click", function () {
	stopAllSounds();
	audio[4].play();
});
soundEffBtn6.addEventListener("click", function () {
	stopAllSounds();
	audio[5].play();
});
