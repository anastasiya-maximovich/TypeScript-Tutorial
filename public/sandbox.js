"use strict";
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let character = "masha";
let age = 30;
let isBlackBelt = false;
const calc = (num) => {
    return num * Math.PI;
};
console.log(calc(6));
function writter(str) {
    console.log(str.split(''));
}
writter("5678");
let nastja = {
    name: "Asja",
    age: 40,
    bcb: true,
};
console.log(nastja);
nastja.age = 45;
nastja.name = "Masha";
console.log(nastja);