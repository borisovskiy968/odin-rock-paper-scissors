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
//declares the winner of the round
function playRound(playerSelection, computerSelection) {
  //Make playerSelection in lowercase for future comparisons with
  //computerSelection
  playerSelection = playerSelection.toLowerCase();
  //Declare the winner of the round
  //Declare variable wordBeats in order to get grammar right
  let wordBeats;
  switch (playerSelection + computerSelection) {
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      wordBeats = (computerSelection === "scissors" ? "beat" : "beats");
      return `You lose: ${computerSelection} ${wordBeats} ${playerSelection}.`;
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      wordBeats = (playerSelection === "scissors" ? "beat" : "beats");
      return `You win: ${playerSelection} ${wordBeats} ${computerSelection}.`;
    default:
      return "It's a draw: next round!";
  };
}
