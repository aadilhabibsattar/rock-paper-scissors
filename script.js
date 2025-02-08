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

function getHumanChoice() {
    let input = prompt('Enter your choice: rock / paper / scissor (Best of 5)')
    let humanSelection = input.toLowerCase()
    
    return humanSelection
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let validChoices = ['rock', 'paper', 'scissor'];
    let humanSelection = getHumanChoice();

    while (!validChoices.includes(humanSelection)) {
        alert('Please enter a valid choice: rock, paper, or scissor.');
        humanSelection = getHumanChoice();
    }

    let computerSelection = getComputerChoice();

    if (
        (humanSelection == 'rock' && computerSelection == 'paper') ||
        (humanSelection == 'paper' && computerSelection == 'scissor') || 
        (humanSelection == 'scissor' && computerSelection == 'rock')
    ) {
        console.log(`You lose, ${computerSelection} beats ${humanSelection}`);
        computerScore++;
    } else if (
        (humanSelection == 'rock' && computerSelection == 'scissor') ||
        (humanSelection == 'paper' && computerSelection == 'rock') ||
        (humanSelection == 'scissor' && computerSelection == 'paper')
    ) {
        console.log(`You win, ${humanSelection} beats ${computerSelection}`);
        humanScore++;
    } else {
        console.log(`It's a tie! You both picked ${humanSelection}`);
    }
}



function playGame() {
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        playRound();
        console.log(`Your score: ${humanScore} | Computer's score ${computerScore}`);
    }
}

playGame();