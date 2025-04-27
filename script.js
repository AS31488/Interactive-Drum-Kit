const drums=document.querySelectorAll('.drum');

const sounds = {
	'65':'kick',
	'83':'snare',
	'68':'hi-hat',
	'70':'tom1',
	'71':'tom2',
	'72':'cymbal',
	'74':'hi-hat',
	'75':'snare',
	'76':'kick',
};

function playSound(key) {
	const audio = document.getElementById(sounds[key]);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
	}
}

document.addEventListener('keydown',(event) => {
	playSound(event.keyCode);
});

drums.forEach(drum => {
	drum.addEventListener('click', () =>{
		const key = drum.getAttribute('data-key');
		playSound(key);
	});
});
