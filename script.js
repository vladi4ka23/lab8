document.addEventListener("DOMContentLoaded", () => {
    // Запит імені користувача
    let userName = prompt("Enter your name:");
    if (!userName || userName.trim() === "") {
        userName = "Guest"; // Встановлення імені за замовчуванням
    }

    const welcomeMessage = document.getElementById("welcome");
    const userNameDisplay = document.getElementById("userNameDisplay");
    welcomeMessage.textContent = `Welcome, ${userName}! Let's play.`;
    userNameDisplay.textContent = userName;

    // Отримуємо елементи для оновлення гри
    const userScoreEl = document.getElementById("userScore");
    const computerScoreEl = document.getElementById("computerScore");
    const playButton = document.getElementById("playButton");
    const resultEl = document.getElementById("result");
    const finalWinnerEl = document.getElementById("finalWinner");

    let userScore = 0;
    let computerScore = 0;

    // Генерація випадкових чисел
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Від 1 до 100
    }

    // Логіка гри
    function playRound() {
        const userNumber = generateRandomNumber();
        const computerNumber = generateRandomNumber();

        resultEl.textContent = `${userName} got ${userNumber}, Computer got ${computerNumber}.`;

        if (userNumber > computerNumber) {
            userScore++;
            resultEl.textContent += ` ${userName} wins this round!`;
        } else if (computerNumber > userNumber) {
            computerScore++;
            resultEl.textContent += " Computer wins this round!";
        } else {
            resultEl.textContent += " It's a tie!";
        }

        // Оновлення рахунку
        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;

        // Перевірка на перемогу
        if (userScore === 3 || computerScore === 3) {
            const winner = userScore === 3 ? userName : "Computer";
            finalWinnerEl.textContent = `${winner} wins the game!`;
            playButton.disabled = true; // Завершення гри
        }
    }

    // Додаємо обробник для кнопки
    playButton.addEventListener("click", playRound);
});
