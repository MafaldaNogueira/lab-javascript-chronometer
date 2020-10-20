const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');




function printTime() {
printSeconds();
printMinutes();

}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let firstString = chronometer.twoDigitsNumber(minutes);
  minUni.innerHTML = firstString[0];
  minUni.innerHTML = firstString[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondString= chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = secondString[0];
  secUni.innerHTML = secondString[1];
}




// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // if chronometer status stopped 
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
    chronometer.startClick(printTime);
  } else {
    btnLeft.innerHTML = 'START';    
    btnLeft.setAttribute('class', 'btn start');
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split'); 
    chronometer.stopClick();
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
   
  }
});