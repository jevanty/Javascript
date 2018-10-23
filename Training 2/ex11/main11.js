
let total = 0;
let i = 0;
let moyenne = 0;


let calculMoyenne = function() {
    let nombre = prompt("Entrez un nombre entier");
    let nombreIn = parseFloat(nombre);
    if (Number.isInteger(nombreIn) == true) {
        while (nombreIn >= 0) {
            total = total + nombreIn;
            i++;
            calculMoyenne();
            return;
        }
        moyenne = (total / i);
        alert(" vous avez entré " + i + " valeurs correctes : " + total + " divisé par " + i + " = " + moyenne);
        location.reload();
    } else {
        alert("votre nombre n'est pas un entier, Réessayez");
        calculMoyenne();
        return;
    }
}

document.querySelector("#bouton").addEventListener("click", calculMoyenne)