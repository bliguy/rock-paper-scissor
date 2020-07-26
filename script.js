let playerScore = 0
let computerScore = 0
let ties = 0
function computerPlay() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS[Math.floor(Math.random() * 3)] //Sets CPU choice to a random number (0-2)
}
// Instead of deleting, I have commented these testing lines out, to show the importance of testing each section before proceeding to the next.  These next few lines all tested the computerPlay function prior to moving onto writing the singleRound function.
// var comptChoice = computerPlay(RPS) 
// console.log (comptChoice);
// var result = singleRound("rock", comptChoice) 
// console.log (result) 
// var result2 = singleRound(playerChooses(), computerPlay())
// console.log (result2)
function singleRound(playerSelecion, computerSelection) {
    if (playerSelecion == "rock") {
        if (computerSelection == "paper") {
            computerScore++
            return "You Lose! Paper beats rock!"
        }
        if (computerSelection == "scissors") {
            playerScore++
            return "You Win! Rock beats scissors!"         
        }
        if (computerSelection == "rock") {
            ties++
            return "It's a draw! Rock ties Rock"         
        }
    }
    if (playerSelecion == "paper") {
        if (computerSelection == "rock") {
            playerScore++
            return "You Win! Paper beats rock!"
        }
        if (computerSelection == "scissors") {
            computerScore++
            return "You Lose! Scissors beats paper!"
        }
        if (computerSelection == "paper") {
            ties++
            return "It's a draw! Paper ties Paper" 
        }
    }
    if (playerSelecion == "scissors") {
        if (computerSelection == "paper") {
            playerScore++
            return "You Win! Scissors beats paper!"
        }
        if (computerSelection == "rock") {
            computerScore++
            return "You Lose! Rock beats scissors!"
        }
        if (computerSelection == "scissors") {
            ties++
            return "It's a draw! Scissors ties scissors" 
        }
    }
    return "Hmmm, I don't understand. Please try again!"
}
function playerChooses () {
    var playerInput = prompt("Choose Rock, Paper, or Scissors")
    return playerInput.toLowerCase()
}
function showScore () {
    console.log (`Player: ${playerScore} Comp: ${computerScore} Ties: ${ties}`)
}
function game () {
    for( var play5 = 0; play5 < 5; play5 ++ ){
        var playerChoice = playerChooses()
        var computerChoice = computerPlay()
        var result = singleRound(playerChoice, computerChoice)
        console.log (result)
        showScore()
    }
    if (playerScore > computerScore) {
        console.log ("Game Over - You win by a score of " + playerScore + " to " + computerScore+ ".")
    } else if (computerScore > playerScore) {
        console.log ("Game Over - You Lose by a score of " + computerScore + " to " + playerScore + ".")
    } else {
        console.log ("It's a tie!  The final score was: Your Score: " + playerScore + ", Computer Score:" + computerScore + ", Ties: " +ties)
    }
}
game ()