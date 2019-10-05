let playerWins = 0;
let computerWins = 0;
let ties = 0;

function computerPlay() {
  let num = Math.floor(Math.random()*3);

  switch(num) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection){
    ties++;
    console.log('I am here')
    return 'You tied! Try again.'
  } else {
    switch(playerSelection) {
      case 'rock':
        if (computerSelection === 'scissors') {
          playerWins++;
          return 'Congrats! You win'
        } else {
          computerWins++;
          return 'Oh no! You lost'
        }

      case 'paper':
        if (computerSelection === 'rock') {
          playerWins++;
          return 'Congrats! You win'
        } else {
          computerWins++;
          return 'Oh no! You lost'
        }

      case 'scissors':
        if (computerSelection === 'paper') {
          playerWins++;
          return 'Congrats! You win'
        } else {
          computerWins++;
          return 'Oh no! You lost'
        }

      default:
        return 'Please enter: rock, paper, or scissors!'
    }
  }
}

function game() {
  for (i = 0; i < 5; i++ ) {
    let playerSelection = prompt('Please choose: rock, paper, or scissors');
    let computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
  }
}

const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let playerSelection = button.id;

    container.removeChild(results);
    results.textContent = playRound(playerSelection, computerPlay());

    if (playerWins >= 5) {
      playerWins = 0;
      computerWins = 0;
      ties = 0;
      alert("You win!")
    } else if (computerWins >= 5) {
      playerWins = 0;
      computerWins = 0;
      ties = 0;
      alert("You lose!")
    };

    const record = document.createElement('p');
    record.textContent = `Wins: ${playerWins} Losses: ${computerWins} Ties: ${ties}`
    results.appendChild(record);
    container.appendChild(results);

  });
});

//game()
