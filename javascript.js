var player = 0, computer = 0;

function getComputerChoice (){
    let randomizer = Math.floor(Math.random() * 3);
    return randomizer == 0 ? "Rock" : randomizer == 1 ? "Paper" : "Scissors";
}

function playRound (computerSelection,playerSelection){
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    
    if
    ((playerMove == "rock" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "rock") )
    {
        computer++
        return `You lose! ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)} beats ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)}`;
    }

    else if
    ((playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") )
    {
        player++
        return `You win! ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)} beats ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}`;
    }

    else  if
    (playerMove=="rock"||playerMove=="paper"||playerMove=="scissors"){
    return `Tie!`;
    }

    else
    {
        return "Invalid Input!";
    }
} 

function game() {
    let playerSelection = prompt("Choose your move");
    return playRound(getComputerChoice(),playerSelection);
}

while(player<5&&computer<5)
{
    console.log(game());
}

if(player==5)
{
    console.log("You win!");
}

else
{
    console.log("You lose!");
}