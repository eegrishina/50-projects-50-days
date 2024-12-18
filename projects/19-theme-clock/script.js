const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

toggle.addEventListener('click', (e) => {
	let html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
})

let totalSeconds = new Date().getSeconds();
let totalMinutes = new Date().getMinutes();
let totalHours = new Date().getHours() % 12;

function setTime() {
	let time = new Date();

	let month = time.getMonth();
	let day = time.getDay();
	let date = time.getDate();

	let hour = time.getHours();
	const clockHour = hour % 12;
	let min = time.getMinutes();
	let sec = time.getSeconds();

	totalSeconds++;
	if (sec === 0) totalMinutes++;
	if (min === 0 && sec === 0) totalHours++;

	hourEl.style.transform = `translate(-50%, -100%) rotate(${totalHours * 30}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${totalMinutes * 6}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${totalSeconds * 6}deg)`;

	timeEl.innerHTML = `${clockHour < 10 ? '0' + clockHour : clockHour}:${min < 10 ? '0' + min : min} ${hour < 12 ? 'AM' : 'PM'}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
