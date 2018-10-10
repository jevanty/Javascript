let val = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
var total=0;

for (i=0;i<val.length;i++) {

    total += val[i];
    console.log(total);
}

// ---------------

let actor = ["Leonardo Dicaprio","Brad Pitt", "Joaquin Phoenix"];
let affiche = "";

for (i=0;i<actor.length;i++) {

    affiche= "le numéro "+ (i+1) + " est " + actor[i];
    console.log (affiche);
}

// ---------------

let nameBross= ["Mario", "Luigi", "Peach"];
let nameBross2= [];

for (i=0;i<nameBross.length;i++); {

nameBross2[i]=nameBross[i];

}

nameBross2.push("Browser");

console.log(nameBross2);





