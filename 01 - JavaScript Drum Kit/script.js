// Plays the audio clip and highlights the div based on the key pressed
window.addEventListener('keydown', function(evt){

    // Locates the correct audio clip and div
    const audio = document.querySelector(`audio[data-key=${evt.code}]`);
    const key = document.querySelector(`.key[data-key=${evt.code}]`);

    // Prevents playback for invalid keys
    if(!audio) return;
    // By reseting the time before playing, we can hear multiple taps of the same key
    audio.currentTime = 0;
    audio.play();
    
    // Adding the CSS class to the corresponding key
    key.classList.add('playing');   
});

// Removes the highlight from the div at the end of the transform
function removeTransition(evt){
    if(evt.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
