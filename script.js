let minutes = 0, seconds = 0, milliseconds = 0, interval;
let running = false;

function updateDisplay() {
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    document.getElementById("milliseconds").innerText = milliseconds.toString().padStart(2, '0');
}

function startPause() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startPause").innerText = "Start";
    } else {
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
        document.getElementById("startPause").innerText = "Pause";
    }
    running = !running;
}

function reset() {
    clearInterval(interval);
    minutes = 0; seconds = 0; milliseconds = 0;
    running = false;
    updateDisplay();
    document.getElementById("startPause").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
}
function lap() {
    if (running) {
        let lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
        let li = document.createElement("li");
        li.innerText = lapTime;
        
        // Append the new lap to the bottom
        document.getElementById("laps").appendChild(li);
    }
}


document.getElementById("startPause").addEventListener("click", startPause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
