let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let input = prompt("Enter 'rock', 'paper', or 'scissors'. ");
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } 
    // else return undefined
}

function playRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    let cc = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        // it's a tie!
        console.log("the round's a tie!")
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        // human wins
        console.log("human wins round!");
        humanScore++;
    } else {
        // computer wins
        console.log("computer wins round!");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(humanScore > computerScore ? "human wins!" : "computer wins!");
}

playGame();