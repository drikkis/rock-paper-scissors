// Choose target rounds needed to win
const gameLength = 5;

// Human's choices
const btnRock = document.querySelector(`#rock`);
const btnPaper = document.querySelector(`#paper`);
const btnScissors = document.querySelector(`#scissors`);

btnRock.addEventListener(`click`, () => {
    console.log(`Rock was pressed!`);
    playRound(`rock`, getComputerChoice());
});
btnPaper.addEventListener(`click`, () => {
    playRound(`paper`, getComputerChoice());
});
btnScissors.addEventListener(`click`, () => {
    playRound(`scissors`, getComputerChoice());
});

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
};

// Initializing both players' scores
let humanScore = 0;
let computerScore = 0;

// Initializing announcements
const resultPanel = document.querySelector(`#result`);
const scorePanel =  document.querySelector(`#score`);

// Playing the round
function playRound(humanChoice, computerChoice) {
    // If player wins round
    if ((humanChoice == `rock` && computerChoice == `scissors`) || (humanChoice == `paper` && computerChoice == `rock`) || (humanChoice == `scissors` && computerChoice == `paper`)) {
        // Increment Human Score
        ++humanScore;
        // Announce result for the round
        resultPanel.textContent = `Congratulations, Player Wins! Player chose ` + humanChoice + ` and the computer chose ` + computerChoice;
        // & put it in console
        console.log(`Congratulations, Player Wins! Player chose ` + humanChoice + ` and the computer chose ` + computerChoice);
        // Announce score
        scoreAnnouncment();
    }
    // If computer wins round
    else if ((humanChoice == `rock` && computerChoice == `paper`) || (humanChoice == `paper` && computerChoice == `scissors`) || (humanChoice == `scissors` && computerChoice == `rock`)) {
        // Increment Computer score
        ++computerScore;
        // Announce result for the round
        resultPanel.textContent = `Sorry, Computer Wins! Player chose ` + humanChoice + ` and computer chose ` + computerChoice;
        // & console
        console.log(`Sorry, Computer Wins! Player chose ` + humanChoice + ` and computer chose ` + computerChoice);
        // Announce score
        scoreAnnouncment();
    }
    // If tie
    else if (humanChoice == computerChoice) {
        // Announce result for the round
        resultPanel.textContent = `It's a tie! Both players chose ` + humanChoice;
        // & console
        console.log(`It's a tie! Both players chose ` + humanChoice);
        // Announce score
        scoreAnnouncment();
    }
    // If human gave invalid answer, plays round again
    else {
        playRound();
    }
};

// After-round score announcment
function scoreAnnouncment() {
     // If more rounds need to be played
    if ( humanScore < gameLength && computerScore < gameLength ) {
        // Print score to page
        scorePanel.textContent = `Score is now - Human: ` + humanScore + ` and Computer: ` + computerScore;
        // & console
        console.log(`Score is now - Human: ` + humanScore + ` and Computer: ` + computerScore);
        }
    // If human wins the game
    else if (humanScore == gameLength) {
        // Print score to page
        scorePanel.textContent = `Human wins the match! ` + humanScore + ` to ` + computerScore;
        // & console
        console.log(`Human wins the match! ` + humanScore + ` to ` + computerScore);
        restartGame();
    }
    // If computer wins the game
    else if (computerScore == gameLength) {
        // Print score to page
        scorePanel.textContent = `Computer wins the match! ` + computerScore + ` to ` + humanScore;
        // & console
        console.log(`Computer wins the match! ` + computerScore + ` to ` + humanScore);
        restartGame();
    }
};

function restartGame() {
    humanScore = 0;
    computerScore = 0;
};


// // Actual Gameplay
// // While human score is less than 3 and computer score is less than 3, loops
// while ( humanScore < 3 && computerScore < 3) {
//     // Plays round
//     playRound();
//     // Announces score
//     scoreAnnouncment();
// }
