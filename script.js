console.log("hello");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.random();

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
    humanChoice.toLowerCase();
    console.log(`Human choice ${humanChoice}`);
    console.log(`Computer choice ${computerChoice}`);

    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        console.log(`You tied! ${computerChoice} ties with ${humanChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }

}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

function playGame(){
    for(i = 1; i <= 5; i++){
        console.log(`Round ${i}!`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}

playGame();