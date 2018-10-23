let b = 2;
let a = 0;

let tableau = [
    "a = b++",
    "a = ++b",
    "a = b--",
    "a = --b;",
    "a += b++",
    "a = 1; a+ = ++b",
    "a = 1; a- = b++",
    "a = 1; a- = ++b",
    "a = 1; a+ = b--",
    "a = 1; a+ = --b"
];


for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

console.log(a = b++);
console.log( a = ++b);
console.log( a = b--);
console.log( a = --b);
console.log( a += b++);

a = 1;
console.log( a = b++);
console.log( a = ++b);
console.log( a = b--);
console.log( a = --b);
console.log( a += b++);