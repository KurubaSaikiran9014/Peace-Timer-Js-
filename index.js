let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let interId;

function counttimer(count) {
    timerText.textContent = count + " seconds left";
    interId = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            clearInterval(interId);
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);
}
twentySecondsBtn.onclick = function() {
    clearInterval(interId);
    let count = 20;
    counttimer(count);
};
thirtySecondsBtn.onclick = function() {
    clearInterval(interId);
    let count = 30;
    counttimer(count);
};
fortySecondsBtn.onclick = function() {
    clearInterval(interId);
    let count = 40;
    counttimer(count);
};
oneMinuteBtn.onclick = function() {
    clearInterval(interId);
    let count = 60;
    counttimer(count);
};
