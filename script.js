let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    }else if (randomNumber < 0.66) {
        return "paper";
    }else {
    return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie, both choose ${humanChoice}`;
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore++;
        resultDiv.textContent = `Hurray, You won!, ${humanChoice}  beats ${computerChoice}`;
    }else {
        computerScore++;
        resultDiv.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === maxScore) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === maxScore) {
        resultDiv.textContent = "Sorry, you lose, the computer won the game";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('score').textContent = "Score: Human 0 - Computer 0";
}

        document.getElementById('rock').addEventListener('click', () => playRound('rock'));
        document.getElementById('paper').addEventListener('click', () => playRound('paper'));
        document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));