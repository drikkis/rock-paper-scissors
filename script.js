// Function to get computer's choice
function getComputerChoice() {
    // Rolls random number
    let randomNumber = Math.random()
    // Assigns computer's choice depending on rolled random number
    if (randomNumber <= 0.33)
        return `rock`
    else if (randomNumber > 0.33 && randomNumber <= 0.66)
        return `paper`
    else
        return `scissors`
}

// Getting the player's choice
function getHumanChoice() {
    // Takes the human's choice
    let dirtyHumanInput = prompt(`Rock, Paper, Scissors! Make your Choice!`, `Rock / Paper / Scissors`)
    // Turns human's choice into lowercase
    let humanInput = dirtyHumanInput.toLowerCase();
    
    // Turns human's input into usable value
    if (humanInput == ('rock'))
        return `rock`
    if (humanInput == (`paper`))
        return `paper`
    if (humanInput == (`scissors`))
        return `scissors`
    // Informs human they didn't choose correctly
    else
        alert(`Invalid choice! Please choose either rock, paper, or scissors!`);
}



// A full game
function playGame() {

    // Initializing both players' scores
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Variables for storing both players' choices
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        // If player wins round
        if ((humanChoice == `rock` && computerChoice == `scissors`) || (humanChoice == `paper` && computerChoice == `rock`) || (humanChoice == `scissors` && computerChoice == `paper`)) {
            // Increment Human Score
            ++humanScore;
            alert(`Congratulations, Player Wins! Player chose ` + humanChoice + ` and the computer chose ` + computerChoice);
            console.log(`Congratulations, Player Wins! Player chose ` + humanChoice + ` and the computer chose ` + computerChoice);
        }
        // If computer wins round
        else if ((humanChoice == `rock` && computerChoice == `paper`) || (humanChoice == `paper` && computerChoice == `scissors`) || (humanChoice == `scissors` && computerChoice == `rock`)) {
            // Increment Computer score
            ++computerScore;
            alert(`Sorry, Computer Wins! Player chose ` + humanChoice + ` and computer chose ` + computerChoice)
            console.log(`Sorry, Computer Wins! Player chose ` + humanChoice + ` and computer chose ` + computerChoice)
        }
        // If tie
        else if (humanChoice == computerChoice) {
            alert(`It's a tie! Both players chose ` + humanChoice)
            console.log(`It's a tie! Both players chose ` + humanChoice)
        }
        // If human gave invalid answer, plays round again
        else {
            playRound();
        }
    }

    // After-round score announcment
    function scoreAnnouncment() {
         // If more rounds need to be played
        if ( humanScore < 3 && computerScore < 3 ) {
            alert(`Score is now - Human: ` + humanScore + ` and Computer: ` + computerScore);
            console.log(`Score is now - Human: ` + humanScore + ` and Computer: ` + computerScore);
            }
        // If human wins the game
        else if (humanScore == 3) {
            alert(`Human wins the match! ` + humanScore + ` to ` + computerScore);
            console.log(`Human wins the match! ` + humanScore + ` to ` + computerScore);
        }
        // If computer wins the game
        else if (computerScore == 3) {
            alert(`Computer wins the match! ` + computerScore + ` to ` + humanScore);
            console.log(`Computer wins the match! ` + computerScore + ` to ` + humanScore);
        }
    }

    // Actual Gameplay
    // While human score is less than 3 and computer score is less than 3, loops
    while ( humanScore < 3 && computerScore < 3) {
        // Plays round
        playRound();
        // Announces score
        scoreAnnouncment();
    }
}


