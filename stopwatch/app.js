let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const displayTime = document.getElementById("displayTime");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function stopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    displayTime.innerHTML =
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (timer !== null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    seconds = minutes = hours = 0;
    displayTime.innerHTML = "00:00:00";
});
