let computerChoice, playerChoice;
let computerScore = 0;
let playerScore = 0;
const container = document.querySelector('.container');
const outcome = document.querySelector('p');
const currentScore = document.querySelector('#totalScore');
const allButtons = document.querySelectorAll('button');
const rockButton = document.getElementById('rock').addEventListener('click', function() {
    game('rock');
});;
const paperButton = document.getElementById('paper').addEventListener('click', function() {
    game('paper');
});;
const scissorsButton = document.getElementById('scissors').addEventListener('click', function() {
    game('scissors');
});;


function computerPlay() {
    computerChoice;
    randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
        default:
            break;
    }
}

function compare(choiceOne, choiceTwo) {
   if((choiceOne === 'rock' && choiceTwo === 'paper') || (choiceOne === 'paper' && choiceTwo === 'rock')) {
       return 'paper';
   }
   else if((choiceOne === 'rock' && choiceTwo === 'scissors') || (choiceOne === 'scissors' && choiceTwo === 'rock')) {
       return 'rock';
   }
   else if((choiceOne === 'paper' && choiceTwo === 'scissors') || (choiceOne === 'scissors' && choiceTwo === 'paper')) {
       return 'scissors';
   }
}

function play(playerChoice, computerChoice) {
    console.log('Player choice: ', playerChoice.toLowerCase());
    console.log('Computer choice: ', computerChoice);

    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === computerChoice) {
        console.log('It is a tie!');
    }
    else {
        let outcome = compare(playerChoice, computerChoice);
        console.log('Winner is: ', outcome);
        if(outcome === playerChoice) {
            console.log('Player wins!');
            ++playerScore;
        }
        else {
            console.log('Computer wins!');
            ++computerScore;
        }
    }
}

function game(playerChoice) {
    play(playerChoice, computerChoice);
    if(playerScore > computerScore) {
        outcome.textContent = 'The winner is Player!';        
    }
    else if(playerScore < computerScore) {
        outcome.textContent = 'The winner is Computer!';        
    }
    else {
        outcome.textContent = 'It is a tie!';        
    }
    currentScore.textContent = `Current score is ${playerScore} and ${computerScore}`;
}

for(let i = 0; i < 5; i++) {
    allButtons.forEach((button) => button.addEventListener('click', function() {
    
    }));
    console.log(i);
    computerPlay();
    playerSelection();
}