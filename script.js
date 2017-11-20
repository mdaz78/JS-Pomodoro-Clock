// event listners and function for session lengths
document.getElementById('session-plus').addEventListener('click', sessionPlus);
document.getElementById('session-minus').addEventListener('click', sessionMinus);
let sessionTime = document.getElementById("length-of-session-time").innerText;

function sessionPlus () {
  sessionTime = Number(sessionTime);
  sessionTime = sessionTime < 60 ? sessionTime += 5 : sessionTime;
  document.getElementById('length-of-session-time').innerText = sessionTime;
  document.getElementById('length-of-timer').innerText = sessionTime;
}


function sessionMinus() {
  sessionTime = Number(sessionTime);
  sessionTime = sessionTime > 5 ? sessionTime -= 5 : sessionTime;
  document.getElementById('length-of-session-time').innerText = sessionTime;
  document.getElementById('length-of-timer').innerText = sessionTime;
}


// event listeners and function for break length
document.getElementById('break-plus').addEventListener('click', breakPlus);
document.getElementById('break-minus').addEventListener('click', breakMinus);
let breakTime = document.getElementById('length-of-break-time').innerText;

function breakPlus() {
  breakTime = Number(breakTime);
  document.getElementById('length-of-break-time').innerText = breakTime < 15 ? breakTime += 1 : breakTime;
}

function breakMinus() {
  breakTime = Number(breakTime);
  document.getElementById('length-of-break-time').innerText = breakTime > 2 ? breakTime -= 1 : breakTime;
}

// event listener for start and reset
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function startTimer() {
  let currentTime = new Date().getTime();
  let sessionLength = document.getElementById('length-of-timer').innerText * 60000;
  let breakLength = document.getElementById('length-of-break-time').innerText * 60000;
  console.log(currentTime + " " + sessionLength + " " + breakLength);
}

function resetTimer() {
}