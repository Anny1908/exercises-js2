/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

LISTO

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){ 
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [{
        firstName: "Antonio",
        lastName: "Miranda",
        skills: ["JS", "React", "Node"],
        class: "Mar1",
        studentLikes: 0,
        job: {
            company: "Google",
            position: "Senior developer",
            city: "Barcelona"
        },
    },
    {
        firstName: "Leo",
        lastName: "Messi",
        skills: ["Play football"],
        class: "Mar3",
        studentLikes: 0,
        job: {
            company: "FC Barcelona",
            position: "Player",
            city: "Barcelona"
        },

    },
    {
        firstName: "John",
        lastName: "VanDamme",
        skills: ["React", "Angular", "Python", "Node"],
        class: "Mar4",
        studentLikes: 0,
        job: {
            company: "Facebook",
            position: "Software Manager",
            city: "Chicago"
        },
    },
    {
        firstName: "Giorgio",
        lastName: "Polvara",
        skills: ["HTML", "JS", "React"],
        class: "Mar2",
        studentLikes: 0,
        job: {
            company: "Amazon",
            position: "Senior developer",
            city: "Barcelona"
        },

    },

];

//YOUR CODE HERE

// EJECC 1
for (const key in mentors) {
    let firstName = mentors[key].firstName;
    let lastName = mentors[key].lastName;
    let skills = mentors[key].skills;
    let React = skills.includes("React");

    if (React) {
        //   console.log(`Hi, my name is ${firstName} ${lastName}. I work in Barcelona and i know React.`);

    }
}
// EJECC 2
for (const key in mentors) {

    let city = mentors[key].job.city;
    let class1 = "Jun1";

    if (city === "Barcelona") {

        mentors[key].class = class1;
        mentors[key].skills.push("SQL");

        //  console.log(mentors[key]);
    }
}
//EJCC 3
for (const key in mentors) {

    mentors[key].addSkill = function(dato) {

            return this.skills.push(dato)
        }
        // console.log(mentors[key]);
}
//EJECC 4
function addSkill(mentors, newSkill) {

    for (const key in mentors) {

        mentors[key].skills.push(newSkill);

        // console.log(mentors[key].skills)
    }
}
addSkill(mentors, "PHP");

// EJECC 5

function removeSkill(mentors, newSkill) {

    for (const key in mentors) {

        let skills = mentors[key].skills;

        if (skills.includes(newSkill)) {
            const indexSkills = (skill) => skill === newSkill;

            skills.splice(skills.findIndex(indexSkills), 1);

        }
        console.log(mentors[key].skills)
    }
}
removeSkill(mentors, "Node");

// EJECC 6

function mentorWithMoreSkills(mentors) {

    let mentorWithSkills;

    mentors.forEach(mentor => {
        if (mentorWithSkills === undefined) {
            mentorWithSkills = mentor
        }

        if (mentorWithSkills.skills.length < mentor.skills.length) {
            mentorWithSkills = mentor
        }
    });

    console.log(mentorWithSkills.firstName);
}
mentorWithMoreSkills(mentors)

//EJECC 7


for (const key in mentors) {

    mentors[key].addStudentLikes = function() {

        return this.studentLikes = this.studentLikes + 1;
    }
}
mentors[1].addStudentLikes();
mentors[3].addStudentLikes();

console.log(mentors);

//EJECC 8
function addStudentLikes(mentors) {

    for (const mentor of mentors) {

        mentor.studentLikes = mentor.studentLikes + 1;
    }
}
addStudentLikes(mentors);
console.log(mentors);