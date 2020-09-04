/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
    price: {
        base: 500.0,
        baseConIva: 605.0
    },
    color: "negro",
    peso: 5500
};
console.log(laptop)
var priceWithTax = laptop.price.base * 1.21
console.log("El precio es: " + priceWithTax + " euros")