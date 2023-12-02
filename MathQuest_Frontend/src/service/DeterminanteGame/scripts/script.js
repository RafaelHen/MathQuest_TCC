// const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
// const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
// const playAgainBtn = gameModal.querySelector("button");
const playAgain = gameModal.getElementsByClassName(".play-again");

const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

const answerInput = document.getElementById("answer-input");
const checkButton = document.getElementById("check-button");
const resultText = document.getElementById("result-text");
const acertosText = document.querySelector(".acertos-score b");
const errosText = document.querySelector(".erros-score b");

// Initializing game variables
// Initializing game variables
let currentWord, correctLetters, wrongGuessCount, acertos = 1, erros;
const maxGuesses = 6;

const resetGame = () => {
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    // wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    // keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

// const getRandomWord = () => {
//     // Selecting a random word and hint from the wordList
//     const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
//     currentWord = word; // Making currentWord as random word
//     // document.querySelector(".hint-text b").innerText = hint;
//     resetGame();

// }

const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `Você sobreviveu ao carrasco!:` : 'Você não sobreviveu ao carrasco:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Parabéns!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = isVictory ? `${modalText} <b>${acertos} </b>` : `${modalText} <b>${erros} Erros</b>`;
    // gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}


    // Gere uma matriz aleatória
let matrix = generateRandomMatrix(2);
renderMatrix(matrix, ctx);
let determinant = calculateDeterminant(matrix);
erros = 0;
acertos = 0;

checkButton.addEventListener("click", () => {
    const userAnswer = parseInt(answerInput.value);
    determinant = calculateDeterminant(matrix);
    console.log("A determinante é " + determinant);
    if (userAnswer === determinant) {
        // resultText.textContent = "Resposta correta!";
        acertos++;
        acertosText.innerText = `${acertos}`;
        wrongGuessCount++;
        matrix = generateRandomMatrix(3);
        renderMatrix(matrix, ctx);
    } else {
        // resultText.textContent = "Resposta incorreta. A determinante é " + determinant;
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        erros++;
        errosText.innerText = `${erros}`;
        matrix = generateRandomMatrix(3);
        renderMatrix(matrix, ctx);
    }

    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    // if(correctLetters.length === currentWord.length) return gameOver(true);
});
resetGame();
   

function renderMatrix(matrix, ctx) {
    const size = matrix.length;
    const cellSize = 50;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cellValue = matrix[i][j];
            const x = j * cellSize + 70;
            const y = i * cellSize + 56;
            ctx.fillText(cellValue.toString(), x, y);
        }
    }
}





// Creating keyboard buttons and adding event listeners
// for (let i = 97; i <= 122; i++) {
//     const button = document.createElement("button");
//     button.innerText = String.fromCharCode(i);
//     keyboardDiv.appendChild(button);
//     button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
// }





function generateRandomMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            // Gere números aleatórios entre -9 e 9 para criar uma matriz variada
            const randomValue = Math.floor(Math.random() * 19) - 9;
            row.push(randomValue);
        }
        matrix.push(row);
    }
    return matrix;
}

function calculateDeterminant(matrix) {
    const size = matrix.length;

    // Caso base: Matriz 2x2
    if (size === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let determinant = 0;
    for (let j = 0; j < size; j++) {
        const cofactor = matrix[0][j] * calculateDeterminant(getSubmatrix(matrix, 0, j));
        determinant += j % 2 === 0 ? cofactor : -cofactor;
    }

    return determinant;
}

function getSubmatrix(matrix, row, col) {
    return matrix.filter((_, i) => i !== row).map(row => row.filter((_, j) => j !== col));
}




// getRandomWord();
// playAgainBtn.addEventListener("click", getRandomWord);
playAgain.addEventListener("click", () => {console.log("teste")})