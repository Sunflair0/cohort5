function blink() {
	let star = document.getElementById("star");
	star.classList.toggle("star_blink");
}


let play = false;

document.addEventListener('click', playVideo);


function playVideo() {

	if (!play) {
		document.querySelector(".video").style.transform = "translate(-50%,-50%)";

		play = true;
	} else {
		document.querySelector(".video").style.transform = "translate(-50%,-200%)";

		play = false;
	}
}


// let site = document.getElementsByClassName("site");

let x = "one";

let idArray =["one", "two", "three", "four", "five", "six", "seven"];

document.getElementById(`one`).addEventListener("mouseover", degreeProgression);
document.getElementById(`one`).addEventListener("mouseout", degreeStop);




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