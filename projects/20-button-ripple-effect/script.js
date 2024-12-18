const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const x = e.clientX;
		const y = e.clientY;

		const buttonLeft = e.target.offsetLeft;
		const buttonTop = e.target.offsetTop;

		const insideX = x - buttonLeft;
		const insideY = y - buttonTop;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.left = insideX + 'px';
		circle.style.top = insideY + 'px';
		this.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	})
})
