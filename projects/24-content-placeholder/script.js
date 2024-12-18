const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const userName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	header.innerHTML = `<img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&w=2102&q=80" alt="">`;
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellat.';
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/48.jpg" alt="">`;
	userName.innerHTML = 'Rebeca Jang';
	date.innerHTML = 'Nov 05, 2021';

	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
