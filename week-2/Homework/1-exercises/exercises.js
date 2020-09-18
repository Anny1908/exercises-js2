/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(people) {

    const content = document.getElementById("content")

    for (let index = 0; index < people.length; index++) {
        const persona = people[index];
        const h1 = document.createElement(`h1`)
        const h2 = document.createElement(`h2`)
        h1.innerText = persona.name
        h2.innerText = persona.job
        content.appendChild(h1)
        content.appendChild(h2)
    }
}
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {

    const content = document.getElementById("content")
    const ul = document.createElement(`ul`)
    for (let index = 0; index < shopping.length; index++) {
        const item = shopping[index];
        const li = document.createElement(`li`)
        li.innerText = item
        ul.appendChild(li)
    }
    content.appendChild(ul)
}
/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {

    const content = document.getElementById("content")
    const list = document.createElement("ul")


    for (let index = 0; index < books.length; index++) {
        const item = books[index];
        // creamos una lista
        const li = document.createElement("li")
            // creamos un paragrafo
        const titulo = document.createElement("p")
        titulo.innerText = books[index].title + " - " + books[index].author
            // creamos un img
        const imagen = document.createElement("img")
        imagen.src = books[index].image
            //para cambiar el color de los libros leidos
        if (books[index].alreadyRead) {

            li.style.backgroundColor = "green"
        } else {

            li.style.backgroundColor = "red"
        }
        li.appendChild(titulo)
        list.appendChild(li)
        li.appendChild(imagen)

    }
    content.appendChild(list)
}
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [{
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "./IMG/Don Norman.jpeg"

    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "./IMG/Brian Christian.jpeg"
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true,
        image: "./IMG/Andrew Hunt.jpeg"
    }
];

exerciseThree(books);