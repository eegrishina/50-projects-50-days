const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
	} else {
		if ((new Date().getTime() - clickTime) < 700) {
			createHeart(e);
			clickTime = 0;
		} else {
			clickTime = new Date().getTime();
		}
	}
})

const createHeart = (e) => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	heart.style.left = `${e.offsetX}px`;
	heart.style.top = `${e.offsetY}px`;

	loveMe.appendChild(heart);

	times.innerHTML = ++timesClicked;

	setTimeout(() => heart.remove(), 1000);
}
