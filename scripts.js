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
