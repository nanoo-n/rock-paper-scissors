// INIT game
function playGame () {
    //  INIT scores, roundCounter at 0
        let humanScore = 0;
        let computerScore = 0;
        let roundCounter = 0;
        let humanChoice;
        let humanChoiceNumber;
        

    //  GENERATE computer answer (#)
    function getComputerChoice () {
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        let computerChoiceName;

        if (computerChoice == 1) {
            computerChoiceName = "rock";
        } else if (computerChoice == 2) {
            computerChoiceName = "paper";
        } else if (computerChoice == 3) {
            computerChoiceName = "scissors";
        } else {
            console.log("Oops, something went wrong with computerChoice.")
        }
        console.log("Computer: ", computerChoiceName);
        return computerChoice;
    }

    //  PROMPT for human answer (word)
    function getHumanChoice () {
        humanChoice = prompt("Rock, paper, scissors?");
        //      CONVERT human answer to #
        function convertHumanChoice (hChoice) {

            if (hChoice.toLowerCase() == "rock") {
                humanChoiceNumber = 1;
                return humanChoiceNumber;
            }
            else if (hChoice.toLowerCase() == "paper") {
                humanChoiceNumber = 2;
                return humanChoiceNumber;
            }
            else if (hChoice.toLowerCase() == "scissors") {
                humanChoiceNumber = 3;
                return humanChoiceNumber;
            }
            else {
                alert("Please enter your choice again. Valid options are: rock, paper, scissors.\nNOT case sensitive");
                getHumanChoice();
            }
        }
        convertHumanChoice(humanChoice);
    }

    //  PLAY round
    function playRound (humanChoice, computerChoice) {

        //      COMPARE answers
        //      ADJUST score respectively
        // IF (user - comp) = -1 || 2 -> computer wins
        if ((humanChoice - computerChoice) == -1 || (humanChoice - computerChoice) == 2) {
            computerScore++;
            console.log("Computer wins! User: ", humanScore, " Computer: ", computerScore);
        }
        // ELIF (user - comp) = -2 || 1 -> user wins
        else if ((humanChoice - computerChoice) == -2 || (humanChoice - computerChoice) == 1) {
            humanScore++;
            console.log("User wins! User: ", humanScore, " Computer: ", computerScore);
        }
        // ELIF (user == comp) -> tie
        else if (humanChoice == computerChoice) {
            console.log("It's a tie! User: ", humanScore, " Computer: ", computerScore);
        }
    }

    for (let i = 0; (humanScore + computerScore) < 5; i++) {
        getHumanChoice();
        console.log("User: ", humanChoice);

        playRound(humanChoiceNumber, getComputerChoice());

        roundCounter++;
        console.log("Round #: ", roundCounter);
        console.log("___________________________\n");
    }

    if (humanScore > computerScore) {
        console.log("User wins! ", humanScore, " - ", computerScore);
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins! ", computerScore, " - ", humanScore);
    }
    else if (humanScore == computerScore) {
        console.log("Oh no! It's a tie. ", humanScore, " even.");
    }
    else {
        console.log("Hmm... something's not right.");
    }
}

console.log("Lets play best of 5!");
playGame();