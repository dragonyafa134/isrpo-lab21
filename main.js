let seconds = 0;        
let minutes = 0;        
let hours = 0;          

let timerInterval = null; 
let isRunning = false;  

const timeDisplay = document.getElementById('time');      
const startBtn = document.getElementById('startBtn');   
const stopBtn = document.getElementById('stopBtn');     
const resetBtn = document.getElementById('resetBtn');    

function updateDisplay() {
    let hoursStr = hours.toString().padStart(2, '0');
    let minutesStr = minutes.toString().padStart(2, '0');
    let secondsStr = seconds.toString().padStart(2, '0');
    timeDisplay.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function tick() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    
    updateDisplay();
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(tick, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();

    seconds = 0;
    minutes = 0;
    hours = 0;
    
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);  
stopBtn.addEventListener('click', stopTimer);   
resetBtn.addEventListener('click', resetTimer);  