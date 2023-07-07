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


// let site = document.getElementsByClassName("site");

let x = "one";

let idArray = ["one", "two", "three", "four", "five", "six", "seven"];

// document.getElementById(`one`).addEventListener("mouseover", degreeProgression);
// document.getElementById(`one`).addEventListener("mouseout", degreeStop);




function degreeProgression() {

	let counter = 0;
	let reset = 50;

	const resetRun = setInterval(() => {
		{
			if (getComputedStyle(document.getElementById(`one`)).getPropertyValue('--hovered') == 1) {

				if (counter == reset) {
					counter = 0;

				}
				counter++
				console.log(counter)
				document.getElementById(`one`).style.backgroundImage = `radial-gradient(#ffffff4a 0%, rgba(255, 255, 255, 0.2) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%), 
									repeating-radial-gradient(
									transparent ${counter - 35}%, 
									black ${counter - 45}%, 
									transparent ${counter - 50}%,
									black ${counter - 25}%, 
									transparent ${counter - 10}%),
									radial-gradient(#ffffff4a 0%, rgba(255, 255, 255, 0.2) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%)`;


			} else if (getComputedStyle(document.getElementById(`one`)).getPropertyValue('--hovered') !== 1) {
				clearInterval(resetRun);
				degreeStop();
			}
		}

	}, 50);
}

function degreeStop() {
	console.log("done");
	document.getElementById(`one`).style.backgroundImage = 'radial-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.75) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%)';

}

const bubble = document.querySelectorAll(".bubble");
const mbubble = document.querySelectorAll(".mbubble");
const duck = document.querySelector("#duck");
console.log(bubble);
document.getElementById('duck').addEventListener("mouseover", addBubbles);

function addBubbles() {
	console.log("in");
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
	const bubbleStream = setTimeout(removeBubbles, 2550);

	return bubbleStream;
}


function removeBubbles(bubbleStream) {
	console.log("out");
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
