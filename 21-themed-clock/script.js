"use strict";

const hourEL = document.querySelector(".needle.hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggleEL = document.querySelector(".toggle-theme");

const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const monthsArr = [
	"Jan.",
	"Feb.",
	"Mar.",
	"Apr.",
	"May",
	"June",
	"July",
	"Aug.",
	"Sep.",
	"Oct.",
	"Nov.",
	"Dec.",
];

//* Map a range of numbers (0-11) to another range of numbers (0%-100%)
const scale = (num, in_min, in_max, out_min, out_max) => {
	return (
		((num - in_min) * (out_max - out_min)) / (in_max - in_min) +
		out_min
	);
};

//* Theme toggle btn
const htmlEL = document.querySelector("html");
toggleEL.addEventListener("click", (e) => {
	if (htmlEL.classList.contains("dark")) {
		htmlEL.classList.remove("dark");
		e.target.innerText = "Dark Mode";
	} else {
		htmlEL.classList.add("dark");
		e.target.innerText = "Light Mode";
	}
});

function setTime() {
	const time = new Date();

	const months = time.getMonth();
	const days = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const ampm = hours >= 12 ? "PM" : "AM";
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	console.log(seconds);

	hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360,
	)}deg)`;

	minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360,
	)}deg)`;

	secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360,
	)}deg)`;

	timeEL.innerText = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`;

	dateEL.innerHTML = `${daysArr[days]}, ${monthsArr[months]} <span class="circle">${date}</span>`;
}

setInterval(() => {
	setTime();
}, 1100);
