function setAlarm() {

    const cronometro = document.getElementById("timeRemaining")
    let setAlarm = document.getElementById("alarmSet")
    let hora = setAlarm.valueAsNumber
    console.log(hora)
    console.log(hora < 10)

    if (hora < 10) {

        cronometro.innerText = "Time Remaining: 00:" + hora

    } else {
        cronometro.innerText = "Time Remaining: 00:0 " + hora

    }

    let counter = hora;

    function countdown(counter) {
        if (counter > 0) {
            counter--;
            setTimeout(function() { countdown(counter) }, 1000);
            cronometro.innerText = "Time Remaining: 00:" + (counter < 10 ? "0" + counter : counter)
        } else {

            playAlarm()

        }
    }
    countdown(counter);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
    document.getElementById("set").addEventListener("click", () => {
        setAlarm();
    });

    document.getElementById("stop").addEventListener("click", () => {
        pauseAlarm();
    });
}

function playAlarm() {
    audio.play();
}

function pauseAlarm() {
    audio.pause();
    let cambioColor = document.querySelector(".centre");
    cambioColor.style.backgroundColor = `#ffa500`;

}

window.onload = setup;