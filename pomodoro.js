let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  let timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          alert('Pomodoro completed!');
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = document.getElementById('pomodoroLength').value;
  seconds = 0;
  updateDisplay();
  isRunning = false;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

updateDisplay();
