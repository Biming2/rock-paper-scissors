let computerChoice, playerChoice;
let computerScore = 0;
let playerScore = 0;
let moves = 0;
const container = document.querySelector('.container');
const outcome = document.querySelector('#outcome');
const currentScore = document.querySelector('#totalScore');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerOptions = [rockButton, paperButton, scissorsButton];
const movesText = document.querySelector('#moves');

function computerPlay() {
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
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === computerChoice) {
        outcome.textContent = `It is a tie! Computer chose ${computerChoice}`;        
    }
    else {
        let result = compare(playerChoice, computerChoice);
        if(result === playerChoice) {
            ++playerScore;
            outcome.textContent = `The winner is Player! Computer chose ${computerChoice}`;        

        }
        else {
            ++computerScore;
            outcome.textContent = `The winner is Computer! Computer chose ${computerChoice}`;        
        }
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    moves = 0;
    playerOptions.forEach(option => {
        option.addEventListener('click', function(){
            moves++;
            computerPlay();
            play(this.innerText, computerChoice);
            currentScore.textContent = `Current score is ${playerScore} and ${computerScore}`;
            movesText.textContent = `Moves finished: ${moves}`;
            if(moves === 5) {
                gameOver();
            }
        });
    });
}

function gameOver() {
    playerOptions.forEach(option => {
        option.style.display = 'none';
    });

    if(playerScore === computerScore) {
        outcome.style.color = 'yellow';
        outcome.style.fontSize = '2rem';
        outcome.style.fontWeight = 'bold';
        outcome.textContent = 'It is a tie!';
    }
    else if(playerScore > computerScore) {
        outcome.style.color = 'green';
        outcome.style.fontSize = '2rem';
        outcome.style.fontWeight = 'bold';
        outcome.textContent = 'You have won!';
    }
    else {
        outcome.style.color = 'red';
        outcome.style.fontSize = '2rem';
        outcome.style.fontWeight = 'bold';
        outcome.textContent = 'The computer has won!';
    }
    currentScore.textContent = `Final score is ${playerScore} and ${computerScore}`;
    movesText.textContent = 'Press F5 to restart';
}

game();