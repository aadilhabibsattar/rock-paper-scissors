const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const resultDiv = document.querySelector('.result-div');
const scoreDiv = document.querySelector('.score-div');

let selectionButtons = [rockButton, paperButton, scissorButton];
let humanScore = 0;
let computerScore = 0;
let humanSelection = ''

function compareButton(button) {
    if (button === rockButton) {
        return "rock";
    } else if (button === paperButton) {
        return "paper";
    } else if (button === scissorButton) {
        return "scissor";
    }
}

function getHumanChoice() {
    selectionButtons.forEach(selection => {
        selection.addEventListener("click", () => {
            humanSelection = compareButton(selection);
            playRound();
        })
    });
}

function getComputerChoice() {
    let choiceValue = Math.random();
    let computerSelection;
    
    if (choiceValue <= 0.33) {
        computerSelection = 'rock';
    } else if (choiceValue<= 0.66) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissor';
    }

    return computerSelection;
}

getHumanChoice();

function playRound() {
    if (!humanSelection) {
        return;
    };

    let result = ''
    let computerSelection = getComputerChoice();

    if (
        (humanSelection == 'rock' && computerSelection == 'paper') ||
        (humanSelection == 'paper' && computerSelection == 'scissor') || 
        (humanSelection == 'scissor' && computerSelection == 'rock')
    ) {
        computerScore++;
        result = `You lose, ${computerSelection} beats ${humanSelection}`;
    } else if (
        (humanSelection == 'rock' && computerSelection == 'scissor') ||
        (humanSelection == 'paper' && computerSelection == 'rock') ||
        (humanSelection == 'scissor' && computerSelection == 'paper')
    ) {
        humanScore++;
        result = `You win, ${humanSelection} beats ${computerSelection}`;
    } else {
        result = `It's a tie! You both picked ${humanSelection}`;
    }

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? 'You win!' : 'Computer wins!';
        finalScore = `Final score: Your score: ${humanScore} | Computer's score ${computerScore}`
        endGame(winner, result, finalScore);
    } else {
        updateUI(result);
    }
}

function updateUI(result) {
    let scoreString = `Your score: ${humanScore} | Computer's score ${computerScore}`;

    resultDiv.textContent = result;
    scoreDiv.textContent = scoreString;
}

function endGame(winner, result, finalScore) {
    resultDiv.textContent = `${result}`; 
    scoreDiv.textContent = finalScore;

    selectionButtons.forEach(selection => {
        selection.disabled = true;
    });
}