// ex1:

let bonjour="Bonjour";
alert(bonjour);

// ex2:

let nom = "Vantighem";
let prenom = "Jérémy";
let ville = "Tournai";

alert("nom: "+ nom + "\n" + "prénom: " + prenom + "\n" + "ville: " + ville + "\n");

// ex3:

var name = prompt("Quel est ton nom?");

alert( "Bonjour, " + name);

// ex4:

var name = prompt("Quel est ton nom?");
var lastName = prompt("Quel est ton nom de famille?");
var city = prompt("où habites-tu?");

alert('nom: ' + lastName + '\n' + 'prénom: ' + name + '\n' + 'ville: ' + city);

// ex5:

let premierNombre = prompt("introduisez un nombre");
let deuxiemeNombre = prompt("introduisez un second nombre"); 

let premierNombreEntier = Math.round(premierNombre);

alert(" le résultat de leur multiplication est égal à " + ( premierNombreEntier * deuxiemeNombre));

// ex7:

let birthDate = prompt("votre année de naissance:");
let feetSize = prompt("votre pointure:");

function calcul () {

let double = (feetSize*2);
let add = (double + 5);
let multiply = (add * 50);
let less = (multiply - birthDate);
let resultat =(less + 1766);

return resultat;

}

alert(calcul());

// ex8:

let age = prompt("Quel est votre age?");

if (age >18) {

alert("vous etes majeur")
}

else {

    alert("vous etes mineur")
};













