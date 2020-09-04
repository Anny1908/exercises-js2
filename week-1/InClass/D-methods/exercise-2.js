/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/
let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function(newAddress) {
        this.currentAddress = newAddress;
    },
    celebrateBirthday: function() {
        this.age = this.age + 1;
    }
};
console.log(person.name) // Alice
console.log(person.age) // 25
console.log(person.currentAddress) // Glasgow
person.changeAddress('Mexico Barcelona') // Mexico Barcelona
console.log(person.currentAddress) // Mexico Barcelona
person.celebrateBirthday() // ninguno
console.log(person.age) // 26