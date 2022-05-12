const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
sessionStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;



startBtn.addEventListener("click", () => {
    let btn = sessionStorage.getItem("btn");

    if (btn === "focus") {
        mins = +sessionStorage.getItem("focusTime") || 25;
    } else {
        mins = +sessionStorage.getItem("breakTime") || 5;
    }

    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    startBtn.style.transform = "scale(0)";
    paused = false;
});

function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    



    if (seconds > 0) {
        // calculating percentage of time
        perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
        if (seconds < 10){
            circle.classList.add("danger");
        }
    } else {
        mins = 00;
        seconds = 00;
        bell.play();
        let btn = sessionStorage.getItem("btn");
        if (btn === "focus"){
            startBtn.textContent = "start break";
            startBtn.classList.add("break");
            sessionStorage.setItem("btn", "break");
        } else {
            startBtn.classList.remove("break");
            startBtn.textContent = "start focus";
            sessionStorage.setItem("btn", "focus");
        }
        startBtn.style.transform = "scale(1)";
    }

}

