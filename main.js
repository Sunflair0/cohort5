function blink() {
	let star = document.getElementById("star");
	star.classList.toggle("star_blink");
}

// playVideo to desend video and play,
// retractVideo to restrict eventlistener to just video container 
//and teapot illusion link

const vid = document.querySelector("#vid");
const video = document.querySelector(".video")
let play = false;

if (vid) {
	vid.addEventListener('click', playVideo)
};
if (video) {
	video.addEventListener('click', retractVideo)
};

function retractVideo() {
	video.style.transform = "translate(-50%,-200%)";
	play = false;
}

function playVideo() {
	if (!play) {
		video.style.transform = "translate(-50%,-50%)";

		play = true;
	} else {
		retractVideo()
	}
}


const bubble = document.querySelectorAll(".bubble");
const mbubble = document.querySelectorAll(".mbubble");
const duck = document.querySelector("#duck");
document.getElementById('duck').addEventListener("mouseover", addBubbles);

function addBubbles() {
	bubble.forEach((elem) => {
		console.log(elem);
		elem.classList.add('bubbles');
	});
	mbubble.forEach((elem) => {
		console.log(elem);
		elem.classList.add('bubbles2');
	});
	if (duck) {
		duck.addEventListener("mouseout", delayBubbleFade);
		duck.removeEventListener("mouseover", addBubbles);
	}
}

function delayBubbleFade() {
	const bubbleStream = setTimeout(removeBubbles, 2400);
	return bubbleStream;
}

function removeBubbles(bubbleStream) {
	bubble.forEach((elem) => {
		elem.classList.remove('bubbles');
	});
	mbubble.forEach((elem) => {
		elem.classList.remove('bubbles2');
	});

	if (duck) {
		duck.addEventListener("mouseover", addBubbles);
		duck.removeEventListener("mouseout", delayBubbleFade);
		clearTimeout(bubbleStream);
	}
}
