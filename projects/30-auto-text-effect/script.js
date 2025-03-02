const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I love programming!';
let idx = 1;
let speed = 400 / speedEl.value;

writeText();

function writeText() {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
})
