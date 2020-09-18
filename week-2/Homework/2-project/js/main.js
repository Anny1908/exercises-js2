let buttonBlue = document.querySelector("#blueBtn");
let buttonOrange = document.querySelector("#orangeBtn");
let buttonGreen = document.querySelector("#greenBtn");

function changeColor(color) {

    let jumbotron = document.querySelector(".jumbotron");
    let donate = document.querySelector(".jumbotron .btn-primary");
    let volunteer = document.querySelector(".jumbotron .btn-secondary");

    if (color === "blue") {

        jumbotron.style.backgroundColor = `#588fbd`;
        donate.style.backgroundColor = `#ffa500`;
        volunteer.style.backgroundColor = `black`;
        volunteer.style.color = `white`;

    } else if (color === "orange") {

        jumbotron.style.backgroundColor = `#f0ad4e`;
        donate.style.backgroundColor = `#5751fd`;
        volunteer.style.backgroundColor = `#31b0d5`;
        volunteer.style.color = `white`;
    } else if (color === "green") {

        jumbotron.style.backgroundColor = `#87ca8a`;
        donate.style.backgroundColor = `black`;
        volunteer.style.backgroundColor = `#8c9c08`;
    }

}

buttonBlue.addEventListener('click', () => changeColor('blue'));

buttonOrange.addEventListener('click', () => changeColor('orange'));

buttonGreen.addEventListener('click', () => changeColor('green'));

// PARTE 2

let submit = document.querySelector("form button");

function validarDatos(event) {

    event.preventDefault();
    let name = document.querySelector("#example-text-input");
    let email = document.querySelector("#exampleInputEmail1");
    let describe = document.querySelector("#exampleTextarea");

    console.log(describe.value);
    if (!name.value.length > 0) {

        name.style.backgroundColor = "red";

    } else if (!email.value.includes("@")) {


        email.style.backgroundColor = "red";


    } else if (!describe.value.length > 0) {

        describe.style.backgroundColor = "red";
    } else {

        alert("thanks");
        name.value = "";
        email.value = "";
        describe.value = "";

    }
}

submit.addEventListener('click', event => validarDatos(event));