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

    if(humanChoice === "rock" && computerChoice === "rock"){
        return console.log(`You tied! ${computerChoice} ties with ${humanChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        return console.log(`You tied! ${computerChoice} ties with ${humanChoice}`);
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        return console.log(`You tied! ${computerChoice} ties with ${humanChoice}`);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
