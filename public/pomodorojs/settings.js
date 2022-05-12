const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = sessionStorage.getItem("focusTime");
breakTimeInput.value = sessionStorage.getItem("breakTime");


// adding event listeners to the buttons

// form event click
document.querySelector(".start").addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("focusTime", focusTimeInput.value);
    sessionStorage.setItem("breakTime", breakTimeInput.value);
});


// reset event click
document.querySelector(".reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
});


// pause event click
pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout("decrement()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");

    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }

});



