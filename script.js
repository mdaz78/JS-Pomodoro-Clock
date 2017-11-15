// event listners and function for session lengths
document.getElementById('session-plus').addEventListener('click', sessionPlus);
document.getElementById('session-minus').addEventListener('click', sessionMinus);
let sessionTime = document.getElementById("session-time").innerText;

function sessionPlus () {
  sessionTime = Number(sessionTime);
  document.getElementById('session-time').innerText = sessionTime < 60 ? sessionTime += 5 : sessionTime;
}


function sessionMinus() {
  sessionTime = Number(sessionTime);
  document.getElementById('session-time').innerText = sessionTime > 5 ? sessionTime -= 5 : sessionTime;
}


// event listeners and function for break length
document.getElementById('break-plus').addEventListener('click', breakPlus);
document.getElementById('break-minus').addEventListener('click', breakMinus);
let breakTime = document.getElementById('break-time').innerText;

function breakPlus() {
  breakTime = Number(breakTime);
  document.getElementById('break-time').innerText = breakTime < 15 ? breakTime += 1 : breakTime;
}

function breakMinus() {
  breakTime = Number(breakTime);
  document.getElementById('break-time').innerText = breakTime > 2 ? breakTime -= 1 : breakTime;
}

