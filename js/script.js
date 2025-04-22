const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

// countdown 30 sec

let secondsLeft = 10;

const handleCountdownTick = () => {
  secondsLeft--;
  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
  }
  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();
