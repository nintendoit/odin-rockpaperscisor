function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  x = getRandomInt(3);
  if (x == 0) {
    return "Rock";
  } else if (x == 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
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
      x = "You lost! Scissor beats Paper";
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

function winOrLoss(x) {
  if (x.includes("won")) {
    humanScore++;
  } else if (x.includes("lost")) {
    aiScore++;
  }
}

// function game(rounds) {
//     let humanScore = 0, aiScore = 0;
//     for (let index = 0; index < rounds; index++) {
//         matchResult = playRound(prompt("Enter your choice: "), getComputerChoice());
//         console.log(matchResult);
//         if (matchResult.includes("won")) {
//             humanScore++;
//         } else if (matchResult.includes("lost")) {
//             aiScore++;
//         }
//     }
//     let winner = (humanScore > aiScore)? "Human": "ai";
//     console.log(`Match result!\nHuman: ${humanScore}, AI: ${aiScore}\nWinner: ${winner}`)
// }

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const ScissorButton = document.querySelector("#scissorButton");

let humanScore = 0,
  aiScore = 0;

const div = document.createElement("div");
div.style.backgroundColor = "blue";
div.style.color = "white";

rockButton.addEventListener("click", () => {
  const y = playRound("Rock");
  winOrLoss(y);
  div.textContent = y;
  const scoreBoard = `\n Human: ${humanScore}  AI: ${aiScore}`;
  // TODO: Make result multi line
  div.textContent += scoreBoard;
  if (humanScore >= 5) {
    const winnerDeclare = " Human won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  } else if (aiScore >= 5) {
    const winnerDeclare = " AI won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  }
});

paperButton.addEventListener("click", () => {
  const y = playRound("Paper");
  winOrLoss(y);
  div.textContent = y;
  const scoreBoard = `\n Human: ${humanScore}  AI: ${aiScore}`;
  // TODO: Make result multi line
  div.textContent += scoreBoard;
  if (humanScore >= 5) {
    const winnerDeclare = " Human won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  } else if (aiScore >= 5) {
    const winnerDeclare = " AI won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  }
});

scissorButton.addEventListener("click", () => {
  const y = playRound("Scissor");
  winOrLoss(y);
  div.textContent = y;
  const scoreBoard = `\n Human: ${humanScore}  AI: ${aiScore}`;
  // TODO: Make result multi line
  div.textContent += scoreBoard;
  if (humanScore >= 5) {
    const winnerDeclare = " Human won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  } else if (aiScore >= 5) {
    const winnerDeclare = " AI won the game!";
    div.textContent += winnerDeclare;
    humanScore = aiScore = 0;
  }
});

document.body.appendChild(div);
