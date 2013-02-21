
function SoundPlayer() {
	this._audio = document.createElement('audio'); 	
}

SoundPlayer.prototype.Sheep = function() {
	var audio = this._audio;
	audio.setAttribute('src', 'sounds/sheep.wav');
	audio.addEventListener('canplay', function() { 
	   audio.play();
	}, false);
}

SoundPlayer.prototype.PlaySound = function(trackName) {
	var audio = this._audio;
	audio.setAttribute('src', 'sounds/' + trackName);
	audio.addEventListener('canplay', function() { 
	   audio.play();
	}, false);
		
}