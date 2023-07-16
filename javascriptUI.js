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
    const p = document.querySelector("p");
    p.textContent='';
    const playerSelection = e.target.getAttribute('data-value');
    let announcement1 = "You chose " + playerSelection + "!";
    let announcement = '';
    let typing = false;
    if(typing==false){
    (async function(){
        
        typing=true;
        for (let i = 0; i < announcement1.length; i++) {
            announcement = announcement1[i];
            p.textContent += announcement;
            await sleep(100);
          }
        
    })();
    }
    typing=false;
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
const playerChoice = Array.from(document.querySelectorAll(".option img"));
console.log(playerChoice);
playerChoice.forEach((image) => image.addEventListener('click',function(e){game(e)}));
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