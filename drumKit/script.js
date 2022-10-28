function playSound(event) {
	const audio = document.querySelector(`audio[data-key = "${event.keyCode}"`);
	// retrieves corresponding audio for key user presses
	const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
	if (audio === null) return;
	// function will not run if there is not corresponding key
	audio.currentTime = 0; // plays sounds from beginning
	audio.play();
	// plays audio
	key.classList.add("playing");
	// retrieves css for .playing
}

function removeTransition(event) {
	if (event.propertyName !== "transform") return;
	// only applies to transform event
	this.classList.remove("playing");
	// key is hit, when transition is over it will be removed
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// selects each key and listens for the end of each key

window.addEventListener("keydown", playSound);
