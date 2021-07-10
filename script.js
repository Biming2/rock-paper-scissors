let computerChoice, playerChoice;
let computerScore = 0;
let playerScore = 0;

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

function playersPlay() {
    playerChoice = prompt('Select your choice: Rock Paper Scissors');
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

function game() {
    for(let i = 0; i < 5; i++) {
        computerPlay();
        playersPlay();
        play(playerChoice, computerChoice);
        console.log('Current score is: ', playerScore, ' and ', computerScore);
    }
    console.log('Final score is: ', playerScore, ' and ', computerScore);
    if(playerScore > computerScore) {
        console.log('The winner is Player!');
    }
    else if(playerScore < computerScore) {
        console.log('The winner is Computer!');
    }
    else {
        console.log('It is a tie!');
    }
}

game();