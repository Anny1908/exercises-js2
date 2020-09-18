function setAlarm() {

    const cronometro = document.getElementById("timeRemaining")
    const setButton = document.getElementById("set")
    const stopButton = document.getElementById("stop")
    let setAlarm = document.getElementById("alarmSet")
    let hora = setAlarm.valueAsNumber

    if (hora < 10) {

        cronometro.innerText = "Time Remaining: 00:0" + hora

    } else {
        cronometro.innerText = "Time Remaining: 00: " + hora

    }

    /* let seconds = new Date(setAlarm.valueAsNumber).getSeconds()
     let minutes = new Date(setAlarm.valueAsNumber).getMinutes()*/

    /* if (seconds < 10) {

         cronometro.innerText = "Time Remaining: 00:0" + seconds

     } else {
         cronometro.innerText = "Time Remaining: " + minutes + ":" + seconds

     }*/

    let counter = hora;
    console.log(hora)

    function countdown(counter) {
        if (counter > 0) {
            counter--;
            setTimeout(function() { countdown(counter) }, 1000);
            console.log(counter);
            cronometro.innerHTML = "Time Remaining: 00:0" + counter
            console.log(cronometro)
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
}

window.onload = setup;