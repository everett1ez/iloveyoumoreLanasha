const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");
const clickBtn = document.getElementById("clickBtn");
const result = document.getElementById("result");
const playAgainBtn = document.getElementById("playAgainBtn");

let computerTimeout;
let playerClicked = false;

startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  countdown.classList.remove("hidden");
  let t = 3;
  countdown.textContent = t;
  const interval = setInterval(() => {
    t--;
    countdown.textContent = t;
    if (t === 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      clickBtn.classList.remove("hidden");
      startGame();
    }
  }, 1000);
};

function startGame() {
  playerClicked = false;
  const randomDelay = Math.random() * 0.75 * 1000;
  computerTimeout = setTimeout(() => {
    if (!playerClicked) endGame(false);
  }, randomDelay);
}

clickBtn.onclick = () => {
  playerClicked = true;
  clearTimeout(computerTimeout);
  endGame(true);
};

function endGame(playerWon) {
  clickBtn.classList.add("hidden");
  result.classList.remove("hidden");
  playAgainBtn.classList.remove("hidden");

  const conf = document.createElement("div");
  conf.classList.add("confetti");
  document.body.appendChild(conf);

  if (playerWon) {
    result.textContent = "You love me more 💕";
    document.body.style.animation = "strobe 0.3s infinite";
  } else {
    result.textContent = "I LOVE YOU MORE 💗";
  }
}

playAgainBtn.onclick = () => {
  result.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
  document.body.style.animation = "";
  document.querySelector(".confetti")?.remove();
  startBtn.classList.remove("hidden");
};
