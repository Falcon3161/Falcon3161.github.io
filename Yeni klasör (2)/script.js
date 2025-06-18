let score = 0;
let timeLeft = 10;
let timerStarted = false;

const button = document.getElementById("click-button");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");

button.addEventListener("click", () => {
  if (!timerStarted) {
    timerStarted = true;
    startTimer();
  }
  score++;
  scoreText.textContent = "Skor: " + score;
});

function startTimer() {
  const countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = "Kalan Süre: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
      button.disabled = true;
      button.textContent = "Bitti!";
    }
  }, 1000);
}
