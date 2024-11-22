let seconds = 0; 
const timerElement = document.getElementById('timer'); 

function updateTimer() {
    seconds++;
    timerElement.textContent = seconds; 
}

setInterval(updateTimer, 1000);
