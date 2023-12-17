// The hands of the clock
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate(){
    // Get the current time
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    // Convert the time to degrees to rotate the hands
    const secDegs = ( (sec / 60) * 360 ) + 90;
    const minDegs = ( (min / 60) * 360) + 90;
    const hrDegs = ( (hr / 12) * 360) + 90;

    // Rotate the hands based on the time
    secHand.style.transform = `rotate(${secDegs}deg)`;
    minHand.style.transform = `rotate(${minDegs}deg)`;
    hrHand.style.transform = `rotate(${hrDegs}deg)`;
}

setInterval(setDate, 1000);