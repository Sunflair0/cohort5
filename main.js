// playVideo to desend video and play,
// retractVideo to restrict eventlistener to just video container 
//and teapot illusion link

const vid = document.querySelector("#vid");
const video = document.querySelector(".video")
let play = false;

if (vid) {
	vid.addEventListener('click', playVideo);
}
if (video) {
	video.addEventListener('click', retractVideo)
};

function retractVideo() {
	video.style.transform = "translate(-50%,-200%)";
	play = false;
}

function playVideo() {
	if (!play) {
		video.style.transform = "translate(-50%,-45%)";

		play = true;
	} else {
		retractVideo()
	}
}

const bubble = document.querySelectorAll(".bubble");
const mbubble = document.querySelectorAll(".mbubble");
const duck = document.querySelector("#duck_bubble_starter");

if (duck) {
	duck.addEventListener("mouseover", addBubbles);
}

function addBubbles() {
	bubble.forEach((bubble) => {
		console.log(bubble);
		bubble.classList.add('bubbles');
	});
	mbubble.forEach((bubble) => {
		console.log(bubble);
		bubble.classList.add('bubbles2');
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
	bubble.forEach((bubble) => {
		bubble.classList.remove('bubbles');
	});
	mbubble.forEach((bubble) => {
		bubble.classList.remove('bubbles2');
	});

	if (duck) {
		duck.addEventListener("mouseover", addBubbles);
		duck.removeEventListener("mouseout", delayBubbleFade);
		clearTimeout(bubbleStream);
	}
}

// meme pop up when wet towel is doubleclicked

const wet = document.querySelector("#wet");

if (wet) {
	wet.addEventListener('dblclick', popMeme);
}

function popMeme() {
	document.querySelector(".wet").style.opacity = "1";
	setTimeout(() => {
		document.querySelector(".wet").style.opacity = "0";
	}, 3000);
}
