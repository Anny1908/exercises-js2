/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

var writers = [{
        firstName: "Virginia",
        lastName: "Woolf",
        occupation: "writer",
        age: 59,
        alive: false
    },
    {
        firstName: "Zadie",
        lastName: "Smith",
        occupation: "writer",
        age: 41,
        alive: true
    },
    {
        firstName: "Jane",
        lastName: "Austen",
        occupation: "writer",
        age: 41,
        alive: false
    },
    {
        firstName: "bell",
        lastName: "hooks",
        occupation: "writer",
        age: 64,
        alive: true
    },
];

for (const key in writers) {
    let firstName = writers[key].firstName;
    let lastName = writers[key].lastName;
    let age = writers[key].age;
    let occupation = writers[key].occupation;
    console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old, and work as a ${occupation}.`);
}

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/