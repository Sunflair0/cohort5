function blink() {
	let star = document.getElementById("star");
	star.classList.toggle("star_blink");
}

let vc= document.querySelector('.video_container');
let vid = document.querySelector('.vid');

let play = false;
vid.addEventListener('click', playVideo);
vc.addEventListener('click', playVideo);


function playVideo() {


	if (!play) {
		document.querySelector(".video").style.cssText = " transform: translate(-50%,-50%)";

		play = true;
	} else {

		document.querySelector(".video").style.cssText = " transform: translate(-50%,-200%)";

		play = false;
	}
}