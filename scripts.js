// Initialize game scores
let userScore = 0;
let compScore = 0;

// DOM elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Add reset button element
const resetBtn = document.querySelector("#reset-btn");

// Generate random computer choice
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Display draw game message
const drawGame = () => {
    msg.innerText = "Game was Draw...!"
    msg.style.backgroundColor = "#081b31";
}

// Display winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        // User wins: increment user score and display win message
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win...! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // Computer wins: increment computer score and display loss message
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose...! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Main game logic
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    
    // Check if it's a draw
    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;

        // Determine winner based on Rock-Paper-Scissors rules
        if (userChoice === 'rock'){
            // Rock loses to paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper'){
            // Paper loses to scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            // Scissors loses to rock
            userWin = compChoice === 'rock' ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// Reset game state and UI
const resetGame = () => {
    // Reset scores
    userScore = 0;
    compScore = 0;

    // Update DOM
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    // Reset message
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
};

// Wire up reset button
if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
}

// Add click event listeners to all choice buttons
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


