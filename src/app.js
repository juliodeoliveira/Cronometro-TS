var seconds = 0;
var minutes = 0;
var hours = 0;
var time;
var startClicked = 0;
var pauseClicked = 0;
var stopClicked = 0;
var startButton = document.getElementById("btnStart");
var clock = document.getElementById("clock");
function startCounter() {
    time = setInterval(counter, 1000);
    startClicked = 1;
    if (startClicked = 1) {
        startButton.style.pointerEvents = "none";
    }
}
function pauseCounter() {
    clearInterval(time);
    pauseClicked = 1;
    if (pauseClicked > 0 && seconds != 0 || minutes != 0 || hours != 0) {
        startButton.style.pointerEvents = "auto";
        startButton.value = "Retomar";
    }
}
function stopCounter() {
    stopClicked = 1;
    location.reload();
}
function digits(num) {
    if (num < 10) {
        return ["0" + num];
    }
    else {
        return num;
    }
}
function counter() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
    // elemento para adicionar no site o resultado
    clock.innerHTML = digits(hours) + ":" + digits(minutes) + ":" + digits(seconds);
}
