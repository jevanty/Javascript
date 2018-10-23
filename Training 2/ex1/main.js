// Exercice 1 - écriture d'une fonction:

function surfaceRectangle() {
    let largeurS = prompt("donnez-moi une largeur en cm");
    let longueurS = prompt("donnez-moi une longueur en cm");
    let surface = largeurS * longueurS;
    document.querySelector("#reponseS").innerHTML="votre rectangle à une surface de " + surface + " cm2";
    // alert("votre rectangle à une surface de " + surface + " cm2");
}

function periRectangle() {
    let largeurP = prompt("donnez-moi une largeur");
    let longueurP = prompt("donnez-moi une longueur");
    let perimetre = (largeurP * largeurP) + (longueurP * longueurP);
    document.querySelector("#reponseP").innerHTML="votre rectangle à un périmetre de " + perimetre + " cm";
    // alert("votre rectangle à un périmetre de " + perimetre + " cm");
}

document.querySelector("#calculer").addEventListener("click", surfaceRectangle);

document.querySelector("#perimetre").addEventListener("click", periRectangle);



