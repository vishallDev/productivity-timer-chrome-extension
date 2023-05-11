let countdown; // store the setInterval timer
let timerStarted = false; 
let timerDisplay = document.querySelector("#timer");
function startTimer(duration, display) {
    timerStarted = true;
  let timer = duration, minutes, seconds;
  countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      display.textContent = "Time's up!";
      new Notification("Productivity Timer", { body: "Time's up!" });
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = "25:00";
}

window.onload = function () {
  let timerDisplay = document.querySelector("#timer");
  let startButton = document.querySelector("#start");
  let pauseButton = document.querySelector("#pause");
  let resetButton = document.querySelector("#reset");

  startButton.addEventListener("click", function () {
    startTimer(1500, timerDisplay);
  });

  pauseButton.addEventListener("click", function () {
    pauseTimer();
  });

  resetButton.addEventListener("click", function () {
    resetTimer();
  });
};
