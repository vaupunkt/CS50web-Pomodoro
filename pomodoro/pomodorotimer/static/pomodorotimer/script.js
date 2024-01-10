let workDuration;
let breakDuration;
let intervals;
let isWorkTime = true;
let currentInterval = 1;
let timer;
let timeLeft;
let audio = new Audio("/static/assets/timerSound.mp3");
let audioMuted = false;
audio.volume = audioMuted ? 0.0 : 0.7;
let fadeDuration = 1500;
let fadeSteps = 100;
let fadeStepTime = fadeDuration / fadeSteps;

window.onload = function () {
  document
    .querySelector("#timerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      workDuration =
        document.querySelector('input[name="duration"]').value * 60;
      breakDuration = document.querySelector('input[name="break"]').value * 60;
      intervals = document.querySelector('input[name="intervals"]').value;
      document.querySelector("#currentDuration").innerHTML =
        Math.floor(workDuration / 60) + ":00";
      startTimer(workDuration);
    });

  document.querySelector("#start_pause").addEventListener("click", function () {
    if (this.innerHTML == "Pause") {
      clearInterval(timer);
      this.innerHTML = "Start";
    } else {
      startTimer(timeLeft);
      this.innerHTML = "Pause";
    }
  });

  document.querySelector("#skip").addEventListener("click", function () {
    clearInterval(timer);
    if (isWorkTime) {
      if (currentInterval < intervals) {
        currentInterval++;
        document.querySelector("#currentDuration").innerHTML =
          Math.floor(breakDuration / 60) + ":00";
        startTimer(breakDuration);
      } else if (currentInterval == intervals) {
        alert("Done! 🚀");
      }
    } else {
      document.querySelector("#currentDuration").innerHTML =
        Math.floor(workDuration / 60) + ":00";
      startTimer(workDuration);
    }
    isWorkTime = !isWorkTime;
    document.querySelector("#currentPhase").innerHTML = isWorkTime
      ? "Work Time"
      : "Break Time";
  });

  document.querySelector("#muteAudio").addEventListener("click", function () {
    audioMuted = !audioMuted;
    this.innerHTML = audioMuted ? "Unmute" : "Mute";
  });

  document.querySelector("#reset").addEventListener("click", function () {
    clearInterval(timer);
    document.querySelector("#timerForm").style.display = "inline";
    document.querySelector("#timerRunning").style.display = "none";
    isWorkTime = true;
    currentInterval = 1;
    location.reload();
  });
};

function startTimer(duration) {
  document.querySelector("#timerForm").style.display = "none";
  document.querySelector("#timerRunning").style.display = "inline";
  document.querySelector("#currentInterval").innerHTML =
    currentInterval + "/" + intervals;
  document.querySelector("#currentPhase").innerHTML = isWorkTime
    ? "Work Time"
    : "Break Time";
  timeLeft = duration;
  timer = setInterval(function () {
    timeLeft--;
    updateDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (audioMuted === false) {
        audio.play();
        setTimeout(fadeOut, fadeDuration);
      }
      if (isWorkTime) {
        if (currentInterval < intervals) {
          fetch("/intervalComplete")
            .then((response) => response.json())
            .then(
              (data) =>
                (document.querySelector(
                  "#overallIntervalsDoneCount"
                ).innerHTML = data.count)
            );
          currentInterval++;
          startTimer(breakDuration);
        } else if (currentInterval == intervals) {
          alert("Done! 🚀");
        }
      } else {
        startTimer(workDuration);
      }
      isWorkTime = !isWorkTime;
    }
  }, 1000);
}

function updateDisplay(timeLeft) {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.querySelector("#currentDuration").innerHTML = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function fadeOut() {
  let volume = audio.volume;
  let fade = setInterval(function () {
    if (volume > 0 && volume > 1 / fadeSteps) {
      volume -= 1 / fadeSteps;
      audio.volume = volume;
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, fadeStepTime);
}
