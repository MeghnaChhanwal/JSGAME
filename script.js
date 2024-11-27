// Function to handle user's choice and redirect to the result page

const rulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-rules');
const rulesPopup = document.getElementById('rules-popup');


const userScoreElement = document.querySelector(".scoreboard .score:nth-child(2) .value");
const computerScoreElement = document.querySelector(".scoreboard .score:nth-child(1) .value");

// Retrieve scores from localStorage or initialize them


function selectChoice(choice) {
  // Store the user's choice in localStorage
  localStorage.setItem('userChoice', choice);

  // Redirect to the result page
  window.location.href = 'result.html';
}

// Add event listeners to the buttons for each choice
document.querySelector('.rock').addEventListener('click', function() {
  selectChoice('rock');
});

document.querySelector('.paper').addEventListener('click', function() {
  selectChoice('paper');
});

document.querySelector('.scissors').addEventListener('click', function() {
  selectChoice('scissors');
});


let userScore = parseInt(localStorage.getItem("userScore")) || 0; // Retrieve user score or initialize to 0
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

// Update the scorecard elements on page load
userScoreElement.textContent = userScore;
computerScoreElement.textContent = computerScore;


rulesBtn.addEventListener('click', () => {
  rulesPopup.classList.remove('hidden');
});

// Hide the rules popup
closeRulesBtn.addEventListener('click', () => {
  rulesPopup.classList.add('hidden');
});
