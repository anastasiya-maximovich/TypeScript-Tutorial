var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var character = "masha";
var age = 30;
var isBlackBelt = false;
var calc = function (num) {
    return num * Math.PI;
};
console.log(calc(6));
function writter(str) {
    console.log(str.split(''));
}
writter("5678");
var nastja = {
    name: "Asja",
    age: 40,
    bcb: true
};
console.log(nastja);
nastja.age = 45;
nastja.name = "Masha";
console.log(nastja);
