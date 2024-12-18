const sounds = document.querySelectorAll('audio');

sounds.forEach(audio => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = audio.id;

	btn.addEventListener('click', () => {
		stopSongs();

		document.getElementById(audio.id).play();
	})

	document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
	sounds.forEach(audio => {
		const song = document.getElementById(audio.id);

		song.pause();
		song.currentTime = 0;
	});
}
