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
//reports a winner or loser at the end
function game() {
  //Make 5 rounds of playRound
  let playerChoice, computerChoice;
  //Declare variable wordBeats in order to get grammar right
  let wordBeats;
  for (let i = 0; i < 5; i++) {
    //Get player's choice from prompt
    playerChoice = window.prompt("Rock, or Paper, or Scissors?");
    //Get computer's choice
    computerChoice = getComputerChoice();
    //Play 1 round of the game
    console.log(playRound(playerChoice, computerChoice));
    wordBeats = (computerSelection === "scissors" ? "beat" : "beats");
    return `You lose: ${computerSelection} ${wordBeats} ${playerSelection}.`;
  };
};
