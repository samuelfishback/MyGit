function adjustFontSize(){
  let deviceSize = (window.innerWidth + window.innerHeight) / 2;
  document.documentElement.style.setProperty('--device-size', `${deviceSize}px`);
}

function updateHands(){
  let secondHand = document.getElementById('secondHand');
  let minuteHand = document.getElementById('minuteHand');
  let hourHand = document.getElementById('hourHand');
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
// translating a 24hr time to a 12hr clock
  let hours = now.getHours() % 12;
// each second is 6deg. offset of 90deg is set in css
  let secondsDegrees = seconds * 6; 
  let minutesDegrees = minutes * 6;
// will need to adjust hourHand by 6deg every 10min
// every hour is 30deg
  let hoursDegrees = (hours * 30) + (Math.floor(minutes / 10) * 6);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

window.onload = adjustFontSize;
window.addEventListener('resize', adjustFontSize);
setInterval(updateHands, 1000);
updateHands();