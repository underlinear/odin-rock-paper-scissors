let playerLife = 1, computerLife = 1;
let typing = false;

function updateLifeCounter (){
    const playerLifeDiv = document.querySelector('.playerLives');
    const computerLifeDiv = document.querySelector('.computerLives');
    while(playerLifeDiv.firstChild){
        playerLifeDiv.firstChild.remove();
    }
    while(computerLifeDiv.firstChild){
        computerLifeDiv.firstChild.remove();
    }
    for(let i=0;i<playerLife;i++)
    {
        const heart = document.createElement('img');
        heart.src = 'images/playerHeart.png';
        playerLifeDiv.appendChild(heart);
    }
    for(let j=0;j<computerLife;j++)
    {
        const heart = document.createElement('img');
        heart.src = 'images/computerHeart.png';
        computerLifeDiv.appendChild(heart);
    }
}

function getComputerChoice (){
    let randomizer = Math.floor(Math.random() * 3);
    return randomizer == 0 ? "rock" : randomizer == 1 ? "paper" : "scissors";
}

function playRound (computerSelection,playerSelection){
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    
    if
    ((playerMove == "rock" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "rock") )
    {
        playerLife--;
        updateLifeCounter();
        return `You lose! ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)} beats ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)}.`;
    }

    else if
    ((playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") )
    {
        computerLife--;
        updateLifeCounter();
        return `You win! ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)} beats ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}.`;
    }

    else  if
    (playerMove=="rock"||playerMove=="paper"||playerMove=="scissors"){
    return `Tie!`;
    }
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function game(e) {
    //let playerSelection = prompt("Choose your move");
    if (typing == false) {
        typing = true;
        const p = document.querySelector("p");
        const playerSelection = e.target.getAttribute('data-value');
        let announcement1 = "You chose " + playerSelection + "!";
        let announcement = '';
        (async function () {
            p.textContent = '';
            for (let i = 0; i < announcement1.length; i++) {
                announcement = announcement1[i];
                p.textContent += announcement;
                await sleep(100);
            }
            await sleep(2000);
            p.textContent = '';
            let computerSelection = getComputerChoice();
            let images = document.querySelectorAll('.option img');
            images.forEach((image)=>{if(image.getAttribute('data-value')!=computerSelection)
            image.style.visibility="hidden";
        })
            await sleep(100);
            let announcement2 = `Computer chose ${computerSelection}!`;
            for (let i = 0; i < announcement2.length; i++) {
                announcement = announcement2[i];
                p.textContent += announcement;
                await sleep(100);
            }
            await sleep(2000);
            p.textContent = '';
            let imagePlayerSelected = document.querySelector(`img[data-value="${playerSelection}"]`);
            imagePlayerSelected.style.visibility="visible";
            let announcement3 = playRound(computerSelection,playerSelection);
            for (let i = 0; i < announcement3.length; i++) {
                announcement = announcement3[i];
                p.textContent += announcement;
                await sleep(100);
            }
            images.forEach((image)=>{
            image.style.visibility="visible";
        })
            if(playerLife===0)
            {
                await sleep(2000);
                const announcement4 = 'Game Over! Better luck next time! Thanks for playing!';
                p.textContent = '';
                for (let i = 0; i < announcement4.length; i++) {
                    announcement = announcement4[i];
                    p.textContent += announcement;
                    await sleep(100);
                }
                return;
            }
            else if(computerLife===0)
            {  
                await sleep(2000);
                const announcement4 = 'YOU WON! You are now the king of RNG. Thanks for playing!';
                p.textContent = '';
                for (let i = 0; i < announcement4.length; i++) {
                    announcement = announcement4[i];
                    p.textContent += announcement;
                    await sleep(100);
                }
                return;
            }
            typing=false;
        })();
    }
}
const h3 = document.querySelector("h3");
let title = "Dolim's \"Rock Paper Scissors\" Project";
let titleLetter = '';
(async function () {
    for (let i = 0; i < title.length; i++) {
        titleLetter = title[i];
        h3.textContent += titleLetter;
        await sleep(100);
    }
})();

const playerChoice = Array.from(document.querySelectorAll(".option img"));
updateLifeCounter ();
playerChoice.forEach((image) => image.addEventListener('click', function (e) { game(e) }));
