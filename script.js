let humanScore;
let computerScore;

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
        console.log("This round is a tie!");
        return ;
    }
    if (humanChoice === "paper" && computerChoice ==="rock" || humanChoice === "rock" && computerChoice ==="scissors" || humanChoice === "scissors" && computerChoice ==="paper" ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return ;
    }
    else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return ;
    }
}



function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i=0;i<5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Congrats!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("Tied game!");
    }
}

playGame();