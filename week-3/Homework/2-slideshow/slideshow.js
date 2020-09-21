// Write your code here

let back = document.getElementById("back")
let autoBack = document.getElementById("auto-back")
let forward = document.getElementById("forward")
let autoForward = document.getElementById("auto-forward")
let stop = document.getElementById("stop")
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

forward.addEventListener("click", () => {
    moverImages(images);
})

back.addEventListener("click", () => {
    retroImages(images);
})