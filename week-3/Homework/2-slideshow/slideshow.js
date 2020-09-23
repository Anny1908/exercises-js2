// Write your code here

let back = document.getElementById("back")
let autoBack = document.getElementById("auto-back")
let forward = document.getElementById("forward")
let autoForward = document.getElementById("auto-forward")
let parar = document.getElementById("stop")
let img = document.getElementById("images")

let images = [{

        enlace: "./IMG/353311.jpg"
    },
    {
        enlace: "./IMG/download (1).jpeg"
    },
    {
        enlace: "./IMG/download.jpeg"
    },
    {
        enlace: "./IMG/images (1).jpeg"
    },
    {
        enlace: "./IMG/images.jpeg"
    }

]
let index = 0

function moverImages(array) {

    index = index + 1
    index = index % array.length
    console.log(array[index])
    img.src = array[index].enlace
}

function retroImages(array) {

    index--
    if (index < 0) {
        index = array.length - 1
    }
    img.src = array[index].enlace
    console.log(array[index])
}
let intervalo;

function stop() {
    clearInterval(intervalo);
}


forward.addEventListener("click", () => {
    moverImages(images);
})

back.addEventListener("click", () => {
    retroImages(images);
})
autoForward.addEventListener("click", () => {
    intervalo = setInterval(function() { moverImages(images) }, 1000);
})
autoBack.addEventListener("click", () => {
    intervalo = setInterval(function() { retroImages(images) }, 1000);
})

parar.addEventListener("click", () => {
    stop();
})