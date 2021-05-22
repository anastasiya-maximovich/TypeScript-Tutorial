const inputs = document.querySelectorAll("input");
//console.log(inputs);

inputs.forEach(input => {
    console.log(input)
});

let character = "masha";
let age = 30;
let isBlackBelt = false;

const calc = (num:number) => {
    return num * Math.PI;
}
//console.log(calc(6));

function writter (str: string) {
    console.log (str.split(''));
}

//writter("5678");

let nastja = {
    name: "Asja",
    age: 40,
    bcb: true,
};
console.log(nastja);

nastja.age = 45;
nastja.name = "Masha";

//console.log(nastja);

let great: Function;

great = (a: number, b: number): number => {
    return a * b;
}
let result = great(4, 7);
console.log(result);

const sum = (a: number, b:number, c: number | string = 45): void => {
    console.log(a + b);
    console.log(c);
}

sum(3, 6, "str");
