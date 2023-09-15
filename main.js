const menu_x = document.querySelector(".mobile_box");
const barA = document.querySelector(".bar_a");
const barB = document.querySelector(".bar_b");
const barC = document.querySelector(".bar_c");
const trigger = document.querySelector("#mobile_trigger");

let flag = false;

barAnimate = () => {

	if (!flag) {
		barA.style.transform = "translateY(7.8px) rotate(45deg)";
		barB.style.transform = "translateX(0px)";
		barB.style.width = "0";
		barC.style.transform = "translateY(-7.8px) rotate(-45deg)";

		flag = true;

	} else {
		barA.style.transform = "initial";
		barB.style.transform = "initial";
		barB.style.width = "24px";
		barC.style.transform = "initial";

		flag = false;
	}

}

if (menu_x) {
	menu_x.addEventListener('click', barAnimate);
}

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

retractVideo = () => {
	video.style.transform = "translate(-50%,-200%)";
	play = false;
}

playVideo = () => {
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

addBubbles = () => {
	bubble.forEach((bubble) => {
		bubble.classList.add('bubbles');
	});
	mbubble.forEach((bubble) => {
		bubble.classList.add('bubbles2');
	});
	if (duck) {
		duck.addEventListener("mouseout", delayBubbleFade);
		duck.removeEventListener("mouseover", addBubbles);
	}
}

if (duck) {
	
duck.addEventListener("mouseover", addBubbles);
}
delayBubbleFade = () => {
	const bubbleStream = setTimeout(removeBubbles, 2400);
	return bubbleStream;
}

removeBubbles = (bubbleStream) => {
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

// meme pop up when wet towel is clicked

const wet = document.querySelector("#wet");

popMeme = () => {
	document.querySelector(".wet").style.opacity = "1";
	setTimeout(() => {
		document.querySelector(".wet").style.opacity = "0";
	}, 3200);
}

if (wet) {
	wet.addEventListener('click', popMeme);
}