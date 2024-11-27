
const userChoiceImg = document.getElementById("user-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const resultText = document.getElementById("result-text");
const userScoreElement = document.querySelector(".scoreboard .score:nth-child(2) .value");
const computerScoreElement = document.querySelector(".scoreboard .score:nth-child(1) .value");
const rulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-rules');
const rulesPopup = document.getElementById('rules-popup');


const choices = ["rock", "paper", "scissors"];
let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0; 

const userChoice = localStorage.getItem("userChoice");


function playRound(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Random computer choice

  
  userChoiceImg.src = `${userChoice}.png`;
  computerChoiceImg.src = `${computerChoice}.png`;

  const winner = determineWinner(userChoice, computerChoice);
  highlightWinner(winner);

  if (winner === "user") {
    userScore++; 
  } else if (winner === "pc") {
    computerScore++;
  }

 
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

 
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
}


function determineWinner(userChoice, pcChoice) {
  const outcomes = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" },
  };

  if (userChoice === pcChoice) {
    return "draw";
  } else if (outcomes[userChoice].beats === pcChoice) {
    return "user";
  } else {
    return "pc"; 
  }
}

function highlightWinner(winner) {
  const userCircle = document.querySelector(".user-circle");
  const pcCircle = document.querySelector(".pc-circle");

  userCircle.classList.remove("winner-glow");
  pcCircle.classList.remove("winner-glow");

  if (winner === "user") {
    userCircle.classList.add("winner-glow");
    resultText.innerText = "WIN";

    setTimeout(() => {
      window.location.href = "congo.html"; 
    }, 2000);
  } else if (winner === "pc") {
    pcCircle.classList.add("winner-glow");
    resultText.innerText = "LOSE";
  } else {
    resultText.innerText = "TIE";
  }
}

rulesBtn.addEventListener('click', () => {
  rulesPopup.classList.remove('hidden');
});


closeRulesBtn.addEventListener('click', () => {
  rulesPopup.classList.add('hidden');
});

function playAgain() {
  localStorage.removeItem("userChoice");
  window.location.href = "module1.html";
}


playRound(userChoice);
