// event listners and function for session lengths
document.getElementById('session-plus').addEventListener('click', sessionPlus);
document.getElementById('session-minus').addEventListener('click', sessionMinus);
let sessionTime = document.getElementById("length-of-session-time").innerText;

function sessionPlus() {
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
  document.getElementById('length-of-break-time').innerText = breakTime > 1 ? breakTime -= 1 : breakTime;
}

function startTimer(length, type) {
  if (type == 'session') {
    document.getElementById('session-length').style.color = '#bab6ed';
    document.getElementById('break-length').style.color = 'white';
  } else {
    document.getElementById('break-length').style.color = '#bab6ed';
    document.getElementById('break-length').style.color = 'white';
  }

  document.getElementById('session-plus').disabled = true;
  document.getElementById('session-minus').disabled = true;
  document.getElementById('break-plus').disabled = true;
  document.getElementById('break-minus').disabled = true;
  document.getElementById('start').disabled = true;

  // current time plus the length of session in milli seconds
  let finalTime = new Date().getTime() + length * 60000;

  let runTimer = setInterval(function() {
    let currentTime = new Date().getTime();
    let distance = finalTime - currentTime;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#timer').innerHTML = `${minutes} m ${seconds} s`;

    // If session is over start break
    if (distance <= 1000) {
      clearInterval(runTimer);
      if (type == 'session') {
        startTimer(breakTime, 'break');
      } else {
        startTimer(sessionTime, 'session');
      }
    }
  }, 1000);
}

function resetTimer() {
  location.reload();
}

// event listener for start and reset
document.getElementById('start').addEventListener('click', () => startTimer(sessionTime, "session"));
document.getElementById('reset').addEventListener('click', resetTimer);