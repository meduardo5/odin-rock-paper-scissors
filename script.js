console.log("hello");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.random();
    //console.log(choice);

    if(choice <= 0.33){
        return "rock";
    }
    else if(choice <= 0.66){
        return "paper";
    }
    else
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    return choice;
}

function playRound(humanChoice, computerChoice){
    //humanChoice.toLowerCase();
    console.log(`Human choice ${humanChoice}`);
    console.log(`Computer choice ${computerChoice}`);

    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        console.log(`You tied! ${computerChoice} ties with ${humanChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        userScore.textContent = `Player Score: ${humanScore}`;
        compScore.textContent = `Computer Score: ${computerScore}`;
    }
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        userScore.textContent = `Player Score: ${humanScore}`;
        compScore.textContent = `Computer Score: ${computerScore}`;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        userScore.textContent = `Player Score: ${humanScore}`;
        compScore.textContent = `Computer Score: ${computerScore}`;
    }

}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

/*
function playGame(){
    for(i = 1; i <= 5; i++){
        console.log(`Round ${i}!`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}
*/

/*
    Create three buttons, one for each selection.
    Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
    (you can keep the console.logs for this step)
*/

const container = document.createElement("div");
container.classList.add("container");

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
rockBtn.addEventListener("click", () => {
    playRound(rockBtn.textContent, getComputerChoice());
})

const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
paperBtn.addEventListener("click", () => {
    playRound(paperBtn.textContent, getComputerChoice());
})

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";
scissorsBtn.addEventListener("click", () => {
    playRound(scissorsBtn.textContent, getComputerChoice());
})

container.append(rockBtn, paperBtn, scissorsBtn);
document.body.append(container);

const scoreboard = document.createElement("div");
scoreboard.classList.add("scoreboard");
const para = document.createElement("p");
const userScore = document.createElement("p");
const compScore = document.createElement("p");

scoreboard.append(para, userScore, compScore);
document.body.append(scoreboard);
// NEED TO ADD SCORES TO THE NEWLY CREATED DIV "SCOREBOARD" //
para.textContent = "Begin Game! Select your choice."
userScore.textContent = `Player Score: ${humanScore}`;
compScore.textContent = `Computer Score: ${computerScore}`;



//playGame();