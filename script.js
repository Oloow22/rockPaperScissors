let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 25) {
        message = "Rock";
    } else if (randomNumber > 25 && randomNumber <= 50) {
        message = "Paper";
    } else if (randomNumber > 50) {
        message = "Scissors";
    }
    return message;
}


function getHumanChoice() {
    let mes = "Pick an option";
    let def = "Rock";
    let input = prompt(mes, def);
    input.toLowerCase;
    input.charAt(0).toUpperCase;
    return input;
}


function playRound(humanChoice, computerChoice) {
    let final = "";
    const results = document.querySelector(".results");

    if (!(humanScore == 5 || computerScore == 5)) {
        if (humanChoice == computerChoice) {
            final = console.log("Same");
            const para = document.createElement("p");
            para.textContent = "Same |";
            results.appendChild(para);
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            final = console.log("Human wins with paper");
            humanScore += 1;
            let para = document.createElement("p");
            para.textContent = "Human wins with paper |";
            results.appendChild(para);
        } else if (computerChoice == "Paper" && humanChoice == "Rock") {
            final = console.log("Computer wins with paper");
            computerScore += 1;
            let para = document.createElement("p");
            para.textContent = "Computer wins with paper |";
            results.appendChild(para);
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            final = console.log("Human wins with scissors");
            humanScore += 1;
            let para = document.createElement("p");
            para.textContent = "Human wins with scissors |";
            results.appendChild(para);
        } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
            final = console.log("Computer wins with scissors");
            computerScore += 1;
            let para = document.createElement("p");
            para.textContent = "Computer wins with scissors |";
            results.appendChild(para);
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            final = console.log("Human wins with rock");
            humanScore += 1;
            let para = document.createElement("p");
            para.textContent = "Human wins with rock |";
            results.appendChild(para);
        } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
            final = console.log("Computer wins with rock ");
            computerScore += 1;
            let para = document.createElement("p");
            para.textContent = "Computer wins with rock |";
            results.appendChild(para);
        }

    } else if (computerScore > humanScore) {
        const btns = document.querySelector(".btns");
        spara = document.createElement("p");
        spara.style.color = "brown";
        spara.style.fontfamily = 'Courier New';
        spara.textContent = `Computer wins with ${computerScore}, refresh the page to restart`;
        btns.appendChild(spara);
    } else if (humanScore > computerScore) {
        const btns = document.querySelector(".btns");
        spara = document.createElement("p");
        spara.style.color = "brown";
        spara.style.fontfamily = 'Courier New';
        spara.textContent = `Human wins with ${humanScore}, refresh the page to restart`;
        btns.appendChild(spara);

        console.log(final);

        return humanScore, computerScore, final;


    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    const humanSelection = "Rock";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


});

paper.addEventListener("click", () => {
    const humanSelection = "Paper";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


});

scissors.addEventListener("click", () => {
    const humanSelection = "Scissors";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


});



// const p = document.createElement("p");

// const rock = document.createElement("button");
// const paper = document.createElement("button");
// const scissors = document.createElement("button");



// p.appendChild(rock);
// p.appendChild(paper);
// p.appendChild(scissors);

// rock.addEventListener("click", () => {
//     playRound();
// });
// paper.addEventListener("click", () => {
//     playRound();
// });
// scissors.addEventListener("click", () => {
//     playRound();
// });



// function playGame(){
//     roundCount = 1;
//     while (roundCount <= 5){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection,computerSelection);
//         roundCount +=1;
//     }
//     console.log(humanScore);
//     console.log(computerScore);
//     if (humanScore > computerScore){
//         winner = console.log("Human wins the game");
//     } else if (computerScore > humanScore){
//         winner = console.log("Computer wins the game");
//     } else {
//         winner = console.log("Draw");
//     }

//     return winner;
// }

// playGame();