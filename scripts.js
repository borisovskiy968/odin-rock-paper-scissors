//Create a function that generates random integer from 0 to a given max number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Create a function that gets computer's choice which is random
function getComputerChoice() {
  //Generate random number from 0 to 2 and return either 'Rock', 'Paper' or
  //'Scissors' correspondingly
  switch (getRandomInt(3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  };
}

//Create a function that plays a single round of Rock Paper Scissors and
//declares player's result of the round: win, loss, draw
function playRound(playerSelection, computerSelection) {
  //Make playerSelection in lowercase for future comparisons with
  //computerSelection
  playerSelection = playerSelection.toLowerCase();
  //Declare player's result of the round
  switch (playerSelection + computerSelection) {
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      return "loss";
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      return "win";
    default:
      return "draw";
  };
}

//Create a function that plays 5 rounds of Rock Paper Scissors, keeps score and
//reports the results of each round and the winner at the end
function game() {
  //Make 5 rounds of playRound
  let playerChoice, computerChoice;
  let playerRoundResult;
  let playerWinsMinusLosses = 0;
  //Declare variable wordBeats in order to get grammar right
  let wordBeats;
  for (let i = 0; i < 5; i++) {
    //Get player's choice from prompt
    playerChoice = window.prompt("Rock, or Paper, or Scissors?").toLowerCase();
    //Get computer's choice
    computerChoice = getComputerChoice();
    //Play 1 round of the game
    playerRoundResult = playRound(playerChoice, computerChoice);
    if (playerRoundResult === "loss") {
      playerWinsMinusLosses -= 1;
      wordBeats = (computerChoice === "scissors" ? "beat" : "beats");
      console.log(`You lose: ${computerChoice} ${wordBeats} ${playerChoice}.`);
    } else if (playerRoundResult === "win") {
      playerWinsMinusLosses += 1;
      wordBeats = (playerChoice === "scissors" ? "beat" : "beats");
      console.log(`You win: ${playerChoice} ${wordBeats} ${computerChoice}.`);
    } else {
      console.log("It's a draw!");
    };
  };
  //Display the winner of the game
  if (playerWinsMinusLosses < 0) {
    console.log("Computer won the game!");
  } else if (playerWinsMinusLosses > 0) {
    console.log("You won the game!");
  } else {
    console.log("You have a draw with the computer!");
  };
};

//Declare variables which is set to contain scores
let playerScore = 0;
let computerScore = 0;

//Create a function that plays rounds of RPS until either player or computer
//reaches 5 points to become the winner
function game2 (e) {
  let scoreText = "";
  //Declare variable wordBeats in order to get grammar right
  let wordBeats;
  //Get player's selection
  playerSelection = e.target.textContent.toLowerCase();
  //Get computer's selection
  computerSelection = getComputerChoice();
  //Play 1 round of the game
  playerRoundResult = playRound(playerSelection, computerSelection);
  if (playerRoundResult === "loss") {
    computerScore++;
    wordBeats = (computerSelection === "scissors" ? "beat" : "beats");
    scoreText += `You lose: ${computerSelection} ${wordBeats} ${playerSelection}.` +
      ` The running score: you ${playerScore} : ${computerScore} computer.`;
  } else if (playerRoundResult === "win") {
    playerScore++;
    wordBeats = (playerSelection === "scissors" ? "beat" : "beats");
    scoreText += `You win: ${playerSelection} ${wordBeats} ${computerSelection}.` +
      ` The running score: you ${playerScore} : ${computerScore} computer.`;
  } else {
    scoreText += `It's a draw!` +
      ` The running score: you ${playerScore} : ${computerScore} computer.`;
  }
  //Check for a winner
  if (computerScore === 5) {
    playerScore = computerScore = 0;
    scoreText += " Computer is the winner!";
  } else if (playerScore === 5) {
    playerScore = computerScore = 0;
    scoreText += " You are the winner!"
  }
  rps_par.textContent = scoreText;
}

//Bind to Rock-Paper-Scissors buttons which are for getting player's choice and
//bind to the paragraph which is to display the running score
const rps_par = document.querySelector("p.rps");
const rps_buttons = document.querySelectorAll("button.rps");

//Play round on a button click
rps_buttons.forEach(
  btn => btn.addEventListener(
    "click", e => game2(e)));
