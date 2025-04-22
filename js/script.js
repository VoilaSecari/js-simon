//DOM ELEMENTS

const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputContainer = document.getElementById("input-group");

const messageEl = document.getElementById("message");

const inputList = document.querySelectorAll("#answers-form input");
//debug
//console.log(inputList);

//GENERATOR CASUALE NUMERI
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumbers = [];
while (randomNumbers.length < 5) {
  const generatedNumbers = generateRandomNumber(1, 50);
  if (!randomNumbers.includes(generatedNumbers)) {
    randomNumbers.push(generatedNumbers);
    numbersList.innerHTML += `<li>${generatedNumbers}<li>`;
  }
}
//debug
//console.table(randomNumbers);

// countdown 30 sec

let secondsLeft = 30;

const handleCountdownTick = () => {
  secondsLeft--;
  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
    countdownEl.classList.add("d-none");
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
    instructionsEl.innerText = "Inserisci i numeri visti";
  }
  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();

//submit form controllo numeri

// controllo all'utente
let guessedNumber = [];

//funzionamnto
answersForm.addEventListener("submit", (e) => {
  guessedNumber = [];
  e.preventDefault();

  for (let i = 0; i < inputList.length; i++) {
    const currentInput = inputList[i];
    const currentValue = parseInt(currentInput.value);
    if (randomNumbers.includes(currentValue)) {
      console.log("Numero corretto");
      guessedNumber.push(currentValue);
    }
    //  else {
    //   console.log("Numero sbagliato, riprova");
    // }
  }
  inputContainer.classList.add("d-none");
  numbersList.classList.remove("d-none");
  messageEl.classList.remove("text-danger");
  messageEl.innerText =
    guessedNumber.length > 0
      ? "Hai indovinato i numeri: " + guessedNumber.join(", ")
      : "Non hai indovinato nessun numero, riprova";
});
