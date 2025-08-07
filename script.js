let humanScore ;
let computerScore ;
if (!humanScore) {humanScore = 0}
if (!computerScore) {computerScore = 0}
let result = document.querySelector(".result");
let finalResult = document.querySelector(".finalResult");

function getComputerChoice() {
    let value = Math.random();
    let string;
    if (value <= 1/3) {
        string = "rock";
    }
    else if (value <= 2/3) {
        string = "paper";
    }
    else {
        string = "scissors";
    }
    return string;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:") ;
    return choice ;
}



function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        result.textContent = "This round is a tie!";
        return ;
    }
    if (humanChoice === "paper" && computerChoice ==="rock" || humanChoice === "rock" && computerChoice ==="scissors" || humanChoice === "scissors" && computerChoice ==="paper" ) {
        result.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        return ;
    }
    else {
        result.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        return ;
    }
}


let btns = document.querySelectorAll(".choice");
for (btn of btns) {btn.addEventListener("click", () => { 
    playRound(btn.id,getComputerChoice());
    document.querySelector(".humanScore").textContent = `You: ${humanScore}` ;
    document.querySelector(".computerScore").textContent = `Computer: ${computerScore}` ;
    if (humanScore >= 5 || computerScore >= 5) {
        result.textContent = "";
        if (humanScore > computerScore) {
            finalResult.textContent = "You win the game! Congrats!";
        }
        else {
            finalResult.textContent = "You lose the game!";
        }
        playButton.style.display = "block";
    }
})
}

let playButton = document.querySelector("#playButton");
playButton.style.display = 'none';
playButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".humanScore").textContent = `You: ${humanScore}` ;
    document.querySelector(".computerScore").textContent = `Computer: ${computerScore}` ;
    result.textContent ="";
    finalResult.textContent = "";
    playButton.style.display = 'none';})  
    




