let humanScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber <=25){
        message = "Rock";
    } else if (randomNumber > 25 && randomNumber <= 50){
        message = "Paper";
    } else if (randomNumber > 50) {
        message = "Scissors";
    } 
    return message;
    }


function getHumanChoice(){
    let mes = "Pick an option";
    let def = "Rock";
    let input = prompt(mes,def);
    input.toLowerCase;
    input.charAt(0).toUpperCase;
    return input;
}


function playRound(humanChoice,computerChoice){
    let final = "";

    if (humanChoice == computerChoice){
        final = console.log("Same");
    } else if(humanChoice == "Paper" && computerChoice == "Rock"){
        final = console.log("Human wins with paper");
        humanScore += 1;
    } else if(computerChoice == "Paper" && humanChoice == "Rock"){
        final = console.log("Computer wins with paper");
        computerScore +=1;
    } else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        final = console.log("Human wins with scissors");
        humanScore += 1;
    } else if(computerChoice == "Scissors" && humanChoice == "Paper"){
        final = console.log("Computer wins with scissors");
        computerScore +=1;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        final = console.log("Human wins with rock");
        humanScore += 1;
    } else if (computerChoice == "Rock" && humanChoice == "Scissors"){
        final = console.log("Computer wins with rock");
        computerScore +=1;
    }
    
    return humanScore,computerScore,final;
    
}




function playGame(){
    roundCount = 1;
    while (roundCount <= 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        roundCount +=1;
    }
    console.log(humanScore);
    console.log(computerScore);
    if (humanScore > computerScore){
        winner = console.log("Human wins the game");
    } else if (computerScore > humanScore){
        winner = console.log("Computer wins the game");
    } else {
        winner = console.log("Draw");
    }

    return winner;
}

playGame();