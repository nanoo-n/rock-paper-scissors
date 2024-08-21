/*
getComputerChoice -> random r, p, s
getHumanChoice -> prompt
init humanScore & computerScore at 0
playRound (humanChoice, computerChoice) -> score ++ depending on winner
playGame -> play 5 rounds
*/

//START game
function playGame () {
    
    //INITIALIZE humanScore, computerScore, roundCounter at 0
    let humanScore = 0;
    let computerScore = 0;
    let roundCounter = 0;

    //GENERATE computer choice
    //computerChoice = integer between 1 and 3
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
        console.log("Computer choice: ", computerChoiceName);
        return computerChoice;
    }

    //PROMPT for human choice
    function getHumanChoice () {
        let humanChoice = prompt("Rock, paper, scissors?");
        let humanChoiceNumber;

    //CONVERT humanChoice to number
        //rock = 1
        //paper = 2
        //scissors = 3
        //humanChoice = number
    function convertHumanChoice (answer) {
        if (humanChoice.toLowerCase() == "rock") {
            humanChoiceNumber = 1;
            return humanChoiceNumber;
        } else if (humanChoice.toLowerCase() == "paper") {
            humanChoiceNumber = 2;
            return humanChoiceNumber;
        } else if (humanChoice.toLowerCase() == "scissors") {
            humanChoiceNumber = 3;
            return humanChoiceNumber;
        } else {
            alert("Please enter your choice again. Valid options are: rock, paper, scissors.\nNOT case sensitive");
            //humanChoice = prompt("Rock, paper, scissors?");
            //console.log("rerunning...");
            //convertHumanChoice(humanChoice);
            getHumanChoice();
            return humanChoiceNumber;
        }
    }
    convertHumanChoice(humanChoice);
    console.log("User choice: ", humanChoice);
    return humanChoiceNumber;
    }

    //COMPARE humanChoice to computerChoice
    function playRound (humanChoice, computerChoice) {
        // IF (user - comp) = -1 || 2 -> computer wins
        if ((humanChoice - computerChoice) == -1 || (humanChoice - computerChoice) == 2) {
            console.log("Computer wins!");
            computerScore++;
        }
        // ELIF (user - comp) = -2 || 1 -> user wins
        else if ((humanChoice - computerChoice) == -2 || (humanChoice - computerChoice) == 1) {
            console.log("User wins!");
            humanScore++;
        }
        // ELIF (user == comp) -> tie
        else if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        //playRound(humanChoiceNumber, computerChoice);
        console.log("User score: ", humanScore, "Computer score: ", computerScore);
        roundCounter++;
        console.log("Round #: ", roundCounter);
    }
}

playGame();

//console.log("Computer: ", computerChoice, "\nUser: ", humanChoiceNumber);

/*
1rock-1rock -> tie                1 = 1
1rock-2paper -> comp              1 < 2 ... c wins -1
1rock-3scissors -> user           1 < 3 ... u wins -2
2paper-1rock -> user              2 > 1 ... u wins  1       
2paper-2paper -> tie              2 = 2
2paper-3scissors -> comp          2 < 3 ... c wins -1
3scissors-1rock -> comp           3 > 1 ... c wins  2
3scissors-2paper -> user          3 > 2 ... u wins  1
3scissors-3scissors -> tie        3 = 3

comp wins -1, -1, 2
user wins -2, 1, 1
tie         0, 0, 0

IF (user - comp) = -1 || 2 -> computer wins
ELIF (user - comp) = -2 || 1 -> user wins
ELIF (user == comp) -> tie
*/