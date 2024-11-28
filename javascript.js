let random
let computerChoice
let humanChoice
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    random = Math.round(Math.random() * 2)
    if (random == 0){
        computerChoice = "rock"
    } else if (random == 1){
        computerChoice = "paper"
    } else{
        computerChoice = "scissors"
    }
}

function getHumanChoice(){
    humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    } else if (humanChoice == computerChoice){
        console.log(`Draw!`)
    } else{
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        getHumanChoice()
        getComputerChoice()
        console.log(`Your choice: ${humanChoice}`)
        console.log(`Computer's choice: ${computerChoice}`)
        playRound(humanChoice, computerChoice)
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
}

playGame()