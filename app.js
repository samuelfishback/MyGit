function adjustFontSize(){
  /* old version
  let clockWidth = document.getElementById('innerCircle').offsetWidth;
  document.documentElement.style.setProperty('--clock-width', `${clockWidth}px`);
  */
  let deviceSize = (window.innerWidth + window.innerHeight) / 2;
  document.documentElement.style.setProperty('--device-size', `${deviceSize}px`);
}

function updateSecondHand(){
  let secondHand = document.getElementById('secondHand');
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDegrees = seconds * 6; 
//each second is 6deg. offset of 90deg is set in css
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

window.onload = adjustFontSize;
window.addEventListener('resize', adjustFontSize);
setInterval(updateSecondHand, 1000);
updateSecondHand();