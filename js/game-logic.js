// All code should be written in this file.

// Global variables for setting moves
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

//Function for setting player moves
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)  => {
    //Checking if function is running
    console.log('SetPlayerMoves is running.');

    //Checking valid input
    if(player !== 'Player One' && player !== 'Player Two') {
        console.log('Error, please enter Player One or Player Two');
        return;
    } else {
        if(player === 'Player One') {
            if(moveOneType === 'scissors') {
                playerOneMoveOneType = 'scissors';
            } else if (moveOneType === 'rock') {
                playerOneMoveOneType = 'rock';
            } else if (moveOneType === 'paper') {
                playerOneMoveOneType = 'paper';
            } else {
                console.log('Enter a valid input for move 1 (rock, paper, scissors).');
                return;
            }
            
            if(moveTwoType === 'scissors') {
                playerOneMoveTwoType = 'scissors';
            } else if (moveTwoType === 'rock') {
                playerOneMoveTwoType = 'rock';
            } else if (moveTwoType === 'paper') {
                playerOneMoveTwoType = 'paper';
            } else {
                console.log('Enter a valid input for move 2 (rock, paper, scissors).');
                return;
            }

            if(moveThreeType === 'scissors') {
                playerOneMoveThreeType = 'scissors';
            } else if (moveThreeType === 'rock') {
                playerOneMoveThreeType = 'rock';
            } else if (moveThreeType === 'paper') {
                playerOneMoveThreeType = 'paper';
            } else {
                console.log('Enter a valid input for move 3 (rock, paper, scissors).');
                return;
            }

            if (typeof moveOneValue === 'number') {
                playerOneMoveOneValue = moveOneValue;
            }
            else {
                console.log('Move one value needs to be a number.');
                return;
            }
            if (typeof moveTwoValue === 'number') {
                playerOneMoveTwoValue = moveTwoValue;
            } else {
                console.log('Move two value needs to be a number.');
                return;
            }  

            if (typeof moveThreeValue === 'number') {
                playerOneMoveThreeValue = moveThreeValue;
            }
            else {
                console.log('Move three value needs to be a number.');
                return;
            }  
        }

        if(player === 'Player Two') {
            if(moveOneType === 'scissors') {
                playerTwoMoveOneType = 'scissors';
            } else if (moveOneType === 'rock') {
                playerTwoMoveOneType = 'rock';
            } else if (moveOneType === 'paper') {
                playerTwoMoveOneType = 'paper';
            } else {
                console.log('Enter a valid input for move 1 p2 (rock, paper, scissors).');
                return;
            }
            
            if(moveTwoType === 'scissors') {
                playerTwoMoveTwoType = 'scissors';
            } else if (moveTwoType === 'rock') {
                playerTwoMoveTwoType = 'rock';
            } else if (moveTwoType === 'paper') {
                playerTwoMoveTwoType = 'paper';
            } else {
                console.log('Enter a valid input for move 2 p2 (rock, paper, scissors).');
                return;
            }

            if(moveThreeType === 'scissors') {
                playerTwoMoveThreeType = 'scissors';
            } else if (moveThreeType === 'rock') {
                playerTwoMoveThreeType = 'rock';
            } else if (moveThreeType === 'paper') {
                playerTwoMoveThreeType = 'paper';
            } else {
                console.log('Enter a valid input for move 3 p2 (rock, paper, scissors).');
                return;
            }

            if (typeof moveOneValue === 'number') { 
                playerTwoMoveOneValue = moveOneValue; 
            }
            else {
                console.log('Move one value needs to be a number.');
                return;
            }
            if (typeof moveTwoValue === 'number') { 
                playerTwoMoveTwoValue = moveTwoValue; 
            }
            else {
                console.log('Move two value needs to be a number.');
                return;
            }  
            if (typeof moveThreeValue === 'number') {
                playerTwoMoveThreeValue = moveThreeValue;
            }
            else {
                console.log('Move three value needs to be a number.');
                return;
            }  
            
        }
    }
    

}

//Function for setting computer moves
const setComputerMoves = () => {
    let randNumOne = Math.floor(Math.random() * 3) + 1;
    let randNumTwo = Math.floor(Math.random() * 3) + 1;
    let randNumThree = Math.floor(Math.random() * 3 + 1);   
    
    let randPowerOne = Math.floor(Math.random() * 97 + 1);
    let randPowerTwo = Math.floor(Math.random() * (99 - randPowerOne) + 1);
    let randPowerThree = 99 - randPowerOne - randPowerTwo;

    playerTwoMoveOneValue = randPowerOne;
    playerTwoMoveTwoValue = randPowerTwo;
    playerTwoMoveThreeValue = randPowerThree;
    
    if(randNumOne === 1) {
        playerTwoMoveOneType = 'rock';
    } else if (randNumOne === 2) {
        playerTwoMoveOneType = 'scissors';
    } else if (randNumOne === 3) {
        playerTwoMoveOneType = 'paper';
    }
    if(randNumTwo === 1) {
        playerTwoMoveTwoType = 'rock';
    } else if (randNumTwo === 2) {
        playerTwoMoveTwoType = 'scissors';
    } else if (randNumTwo === 3) {
        playerTwoMoveTwoType = 'paper';
    }
    if(randNumThree === 1) {
        playerTwoMoveThreeType = 'rock';
    } else if (randNumThree === 2) {
        playerTwoMoveThreeType = 'scissors';
    } else if (randNumThree === 3) {
        playerTwoMoveThreeType = 'paper';
    }
}

//Function for getting the winner of each round
const getRoundWinner = (round) => {
    if (round === 1) {
        if(playerOneMoveOneType === playerTwoMoveOneType) {
            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                return 'tie';
            } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One';
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                return 'Player Two';
            }
        }
        if(playerOneMoveOneType === 'scissors') {
            if(playerTwoMoveOneType === 'rock') {
                return 'Player Two';
            } else if(playerTwoMoveOneType === 'paper') {
                return 'Player One';
            }
        } else if(playerOneMoveOneType === 'rock') {
            if(playerTwoMoveOneType === 'scissors') {
                return 'Player One';
            } else if(playerTwoMoveOneType === 'paper') {
                return 'Player Two';
            }
        } else if(playerOneMoveOneType === 'paper') {
            if(playerTwoMoveOneType === 'scissors') {
                return 'Player Two';
            } else if(playerTwoMoveOneType === 'rock') {
                return 'Player One';
            }
        }
    } else if (round === 2) {
        if(playerOneMoveTwoType === playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                return 'tie';
            } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One';
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                return 'Player Two';
            }
        }
        if(playerOneMoveTwoType === 'scissors') {
            if(playerTwoMoveTwoType === 'rock') {
                return 'Player Two';
            } else if(playerTwoMoveTwoType === 'paper') {
                return 'Player One';
            }
        } else if(playerOneMoveTwoType === 'rock') {
            if(playerTwoMoveTwoType === 'scissors') {
                return 'Player One';
            } else if(playerTwoMoveTwoType === 'paper') {
                return 'Player Two';
            }
        } else if(playerOneMoveTwoType === 'paper') {
            if(playerTwoMoveTwoType === 'scissors') {
                return 'Player Two';
            } else if(playerTwoMoveTwoType === 'rock') {
                return 'Player One';
            }
        }
    } else if (round === 3) {
        if(playerOneMoveThreeType === playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                return 'tie';
            } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One';
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                return 'Player Two';
            }
        }
        if(playerOneMoveThreeType === 'scissors') {
            if(playerTwoMoveThreeType === 'rock') {
                return 'Player Two';
            } else if(playerTwoMoveThreeType === 'paper') {
                return 'Player One';
            }
        } else if(playerOneMoveThreeType === 'rock') {
            if(playerTwoMoveThreeType === 'scissors') {
                return 'Player One';
            } else if(playerTwoMoveThreeType === 'paper') {
                return 'Player Two';
            }
        } else if(playerOneMoveThreeType === 'paper') {
            if(playerTwoMoveThreeType === 'scissors') {
                return 'Player Two';
            } else if(playerTwoMoveThreeType === 'rock') {
                return 'Player One';
            }
        }
    }
}

//Function for deciding the winner of the game
const getGameWinner = () => {
    
}