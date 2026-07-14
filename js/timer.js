const timer = document.getElementById("timer");
const message = document.getElementById("message");
const bestScore = document.getElementById("bestScore");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backBtn");

let startTime = 0;
let elapsedTime = 0;
let interval;
let running = false;

let best = localStorage.getItem("bestScore");

if(best){
    bestScore.innerHTML = best;
}else{
    bestScore.innerHTML = "0.00";
}

startBtn.onclick = function(){

    if(running) return;

    running = true;

    startTime = Date.now() - elapsedTime;

    interval = setInterval(function(){

        elapsedTime = Date.now() - startTime;

        let seconds = (elapsedTime / 1000).toFixed(2);

        timer.innerHTML = seconds;

    },10);

};

stopBtn.onclick = function(){

    if(!running) return;

    running = false;

    clearInterval(interval);

    let time = parseFloat(timer.innerHTML);

    let diff = Math.abs(10 - time);

    if(diff <= 0.05){

        message.innerHTML = "🎉 Perfect!";

    }else if(diff <= 0.20){

        message.innerHTML = "👏 Great!";

    }else{

        message.innerHTML = "❌ Try Again";

    }

    let saved = parseFloat(localStorage.getItem("bestScore")) || 0;

    if(saved === 0 || diff < Math.abs(10 - saved)){

        localStorage.setItem("bestScore", time.toFixed(2));

        bestScore.innerHTML = time.toFixed(2);

    }

};

resetBtn.onclick = function(){

    clearInterval(interval);

    running = false;

    elapsedTime = 0;

    timer.innerHTML = "0.00";

    message.innerHTML = "Press Start";

};

backBtn.onclick = function(){

    window.location.href = "games.html";

};
