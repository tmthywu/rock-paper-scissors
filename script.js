let humanScoreValue = 0;
let computerScoreValue = 0;
let gameOver = false;
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const container = document.querySelector(".container");
const humanChoice = document.querySelector("#humanChoice");
const computerChoice = document.querySelector("#computerChoice");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");

container.addEventListener('click', (event) => {
    if (!gameOver) {
        // getting human and computer choices
        let target = event.target;
        let roundComputerChoice = getComputerChoice();
    
        // play round
        let roundResultValue = evaluateRound(target.id, roundComputerChoice);
    
        // show human and computer choice
        humanChoice.textContent = "Human choice: " + target.id;
        computerChoice.textContent = "Computer choice: " + roundComputerChoice;
    
        // update human score
        humanScore.textContent = "Human score: " + humanScoreValue;
    
        // update computer score
        computerScore.textContent = "Computer score: " + computerScoreValue;
    
        // show round result
        roundResult.textContent = roundResultValue;

        // show game result
        if (humanScoreValue >= 5) {
            gameResult.textContent = "Human wins!";
            gameOver = true;
        } else if (computerScoreValue >= 5) {
            gameResult.textContent = "Computer wins!";
            gameOver = true;
        }
    }
});

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return "rock";
    } else if (randInt === 1) {
        return "paper";
    } else if (randInt === 2) {
        return "scissors";
    }
}

function evaluateRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    let cc = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        // it's a tie!
        return 'tie';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        // human wins
        humanScoreValue++;
        return 'human';
    } else {
        // computer wins
        computerScoreValue++;
        return 'computer';
    }
}