function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    x = getRandomInt(3);
    if (x == 0) {
        return "Rock";
    } else if (x == 1){
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    switch (true) {
        case playerSelection == "Rock" && computerSelection == "Rock":
            x = "It's a tie! Both entered Rock.";
            break;
        case playerSelection == "Rock" && computerSelection == "Paper":
            x = "You lost! Paper beats Rock.";
            break;
        case playerSelection == "Rock" && computerSelection == "Scissor":
            x = "You won! Rock beats Scissor.";
            break;
        case playerSelection == "Paper" && computerSelection == "Rock":
            x = "You won! Paper beats rock.";
            break;
        case playerSelection == "Paper" && computerSelection == "Paper":
            x = "It's a tie! Both entered Paper.";
            break;
        case playerSelection == "Paper" && computerSelection == "Scissor":
            x = "You lost! Paper beats Scissor";
            break;
        case playerSelection == "Scissor" && computerSelection == "Rock":
            x = "You lost! Rock beats Scissor.";
            break;
        case playerSelection == "Scissor" && computerSelection == "Paper":
            x = "You won! Scissor beats Paper.";
            break;
        case playerSelection == "Scissor" && computerSelection == "Scissor":
            x = "It's a tie! Both entered Scissor.";
            break;
    
        default:
            console.log("Enter valid choice!!");
            x = null;
            break;
    }
    return x;
}

function game(rounds){
    for (let index = 0; index < rounds; index++) {
        matchResult = playRound(prompt("Enter your choice: "),getComputerChoice());
        console.log(matchResult);
    }
}