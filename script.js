let randomNumber;
let guessCount = 0;
let score = 55;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGameBtn");

const message = document.getElementById("message");
const guessCountDisplay = document.getElementById("guessCount");
const scoreDisplay = document.getElementById("score");


function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessCount = 0;
    score = 55;

    guessCountDisplay.textContent = guessCount;
    scoreDisplay.textContent = score;

    message.textContent = "Start guessing!";

    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;

    guessInput.focus();
}


function checkGuess() {

    const number = Number(guessInput.value);

    if (number < 1 || number > 100 || !number) {
        message.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }

    guessCount++;

    guessCountDisplay.textContent = guessCount;

    if (number === randomNumber) {

        message.textContent = "🎉 Correct! You guessed it!";

        score = 55 - (guessCount * 5);

        if (score < 0) {
            score = 0;
        }

        scoreDisplay.textContent = score;

        guessInput.disabled = true;
        guessBtn.disabled = true;

    } else if (number > randomNumber) {

        message.textContent = "📈 Too High!";

    } else {

        message.textContent = "📉 Too Low!";
    }
}


guessBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

newGameBtn.addEventListener("click", startGame);


startGame();
