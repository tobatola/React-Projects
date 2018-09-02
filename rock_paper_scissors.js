let userInput = "bomb";

const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === "paper" || 	 userInput === "scissors" || userInput ==='bomb') {
			return userInput;
  } else {
  	console.log (`Your entry of ${userInput} is not a valid value!`);
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
  	return 'rock';
	case 1:
  	return 'paper';
	case 2:
  	return 'scissors';
	}
};

const determineWinner = (userChoice, computerChoice) => {
  if (computerChoice === userChoice) {
    console.log("The game was a tie!");
  } else if (userInput === 'bomb') {
  	console.log("You won!");
  } else if (userChoice ==="rock") {
    if (computerChoice === "paper") {
      console.log("The computer won!");
    } else {
      console.log("You won!");
    }
  } else if (userChoice ==="paper") {
    if (computerChoice === "scissors") {
      console.log("The computer won!");
    } else {
      console.log("You won!");
    }
  } else if (userChoice ==="scissors") {
    if (computerChoice === "rock") {
      console.log("The computer won!");
    } else {
      console.log("You won!");
    }
	}
};

const playGame = () => {
  const userChoice = getUserChoice(userInput);
  console.log(`You threw ${userChoice}.`);
  const computerChoice = getComputerChoice();
	console.log(`The computer threw ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();