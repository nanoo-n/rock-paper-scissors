//  HTML selectors
const options = document.querySelector(".options");
const restart = document.querySelector(".restart")
const computerChoiceDisp = document.querySelector(".computer-choice");
const roundWinner = document.querySelector(".round-winner");
const userScore = document.querySelector(".user-score");
const computerScoreDisp = document.querySelector(".computer-score");
const roundCount = document.querySelector(".round-n");
const announcement = document.querySelector(".announcement");
const announceWinner = document.createElement("div");

//  INIT scores, roundCounter at 0
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let computerChoiceName;
let humanChoiceNumber;

function init () {

    //  GENERATE computer answer (#)
    function getComputerChoice () {
        let computerChoice = Math.floor(Math.random() * 3) + 1;

        if (computerChoice == 1) {
            computerChoiceName = "rock";
            computerChoiceDisp.textContent = "✊";
        } else if (computerChoice == 2) {
            computerChoiceName = "paper";
            computerChoiceDisp.textContent = "✋";
        } else if (computerChoice == 3) {
            computerChoiceName = "scissors";
            computerChoiceDisp.textContent = "🖖";
        } else {
            console.log("Oops, something went wrong with computerChoice.")
        }

        console.log("Computer: ", computerChoiceName);
        return computerChoice;
    }

    options.addEventListener("click", buttonListener);

    function buttonListener (event) {
        let target = event.target;
        
        //getComputerChoice();

        switch(target.className) {
            case 'rock buttons':
                //checkWinner();
                console.log("User: rock");
                humanChoiceNumber = 1;
                playRound(humanChoiceNumber, getComputerChoice());
                break;
            case 'paper buttons':
                //checkWinner();
                console.log("User: paper");
                humanChoiceNumber = 2;playRound(humanChoiceNumber, getComputerChoice());
                break;
            case 'scissors buttons':
                //checkWinner();
                console.log("User: scissors");
                humanChoiceNumber = 3;playRound(humanChoiceNumber, getComputerChoice());
                break;
        }
    }

    //  PLAY round
    function playRound (humanChoice, computerChoice) {
        if ((humanScore <= 5) || (computerScore <= 5)) {   
            // IF (user - comp) = -1 || 2 -> computer wins
            if ((humanChoice - computerChoice) == -1 || (humanChoice - computerChoice) == 2) {
                computerScore++;
                console.log("Computer wins! User: ", humanScore, " Computer: ", computerScore);
                roundWinner.textContent = "COMPUTER";
            }
            // ELIF (user - comp) = -2 || 1 -> user wins
            else if ((humanChoice - computerChoice) == -2 || (humanChoice - computerChoice) == 1) {
                humanScore++;
                console.log("User wins! User: ", humanScore, " Computer: ", computerScore);
                roundWinner.textContent = "USER";
            }
            // ELIF (user == comp) -> tie
            else if (humanChoice == computerChoice) {
                console.log("It's a tie! User: ", humanScore, " Computer: ", computerScore);
                roundWinner.textContent = "TIE";
            }

            userScore.textContent = `${humanScore}`;
            computerScoreDisp.textContent = `${computerScore}`;

            roundCounter++;
            console.log("Round #: ", roundCounter);
            console.log("___________________________\n");
            roundCount.textContent = `${roundCounter}`;

            checkWinner();
        }
    }
}

restart.addEventListener("click", resetGames);

function checkWinner () {
    if ((humanScore === 5) || (computerScore === 5)) {
        console.log("GAME OVER@!!!!!!!!!!!!!!!!!!!!!\n\n\n\n");
        announceWinner.classList.add("announce-winner");

        if (humanScore > computerScore) {
            announceWinner.textContent =
            `User wins. Please click on restart to play again.`;
        } else {
            announceWinner.textContent =
            `Computer wins. Please click on restart to play again.`;
        }
        announcement.appendChild(announceWinner);

        //resetGames();
    }
}

function resetGames () {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    computerChoiceDisp.textContent = "";
    roundWinner.textContent = "";
    userScore.textContent = `${humanScore}`;
    computerScoreDisp.textContent = `${computerScore}`;
    roundCount.textContent = `${roundCounter}`;
    announcement.removeChild(announceWinner);
}

init();