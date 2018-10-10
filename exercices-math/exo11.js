var min= Math.min (7, 5, -12, 6, 32, 18, 14, -2);

console.log (min);

// -----------

var max= Math.max(-3, 9, 21, 36, 27, 54, 17, 35);

console.log (max);

// -----------

let add = min + max;

console.log(add);

// -----------

let floatBateau= 10.4;

let couleBateau= Math.floor(floatBateau);

console.log(couleBateau);

let voleBateau= Math.ceil(floatBateau);

console.log(voleBateau);

// -----------

// function randomInt(min, max)

// {

//         var nb =Math.random() * ((max+1-min)+min);

//         return Math.floor(nb);

// }

// randomInt(50,100);

let random1= Math.floor (Math.random()  * (100-50)) + 50;
console.log (random1);

let random2= Math.round (Math.random());
console.log (random2);

let random3= Math.floor (Math.random() * (11));
console.log (random3);

// -----------

let mk= ["Goro", "Johnny Cage", "Kano", "Liu Kang", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sonya", "Sub-Zero"];
let select = mk[Math.round(Math.random() * mk.length)];
console.log(select);



