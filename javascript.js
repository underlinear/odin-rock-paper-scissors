var player = 0, computer = 0;

/*function getComputerChoice (){
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
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function game(e) {
    //let playerSelection = prompt("Choose your move");
    alert(e);
    //return playRound(getComputerChoice(),playerSelection);
}
const h3 = document.querySelector("h3");
let title = "Dolim's \"Rock Paper Scissors\" Project";
let titleLetter = '';
(async function() {
    for (let i = 0; i < title.length; i++) {
      titleLetter = title[i];
      h3.textContent += titleLetter;
      await sleep(100);
    }
  })();
/*
for(let i=0;i<title.length;i++)
{
    titleLetter = title[i];
    h3.textContent += titleLetter;
    await sleep(1000);
}
*/
const playerChoice = document.querySelectorAll(".option img");
playerChoice.forEach(addEventListener('click',(e)=>game(e.target)));
/*
if(player==5)
{
    //console.log("You win!");
}

else
{
    //console.log("You lose!");
}
*/