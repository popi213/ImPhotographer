let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').innerText = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

window.onload = startTimer;

window.onbeforeunload = stopTimer;
