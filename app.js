function adjustFontSize(){
  /* old version
  let clockWidth = document.getElementById('innerCircle').offsetWidth;
  document.documentElement.style.setProperty('--clock-width', `${clockWidth}px`);
  */
  let deviceSize = (window.innerWidth + window.innerHeight) / 2;
  document.documentElement.style.setProperty('--device-size', `${deviceSize}px`);
}

window.onload = adjustFontSize;

window.addEventListener('resize', adjustFontSize);