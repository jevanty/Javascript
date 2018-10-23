let testWhile = function() {

    let phrase = prompt("entrez un mot contenant la lettre P");
    let lettre = "p";

    while (phrase.includes(lettre) == false ) {
        alert("Le mot '" + phrase + "' ne comporte pas la lettre P");
        return testWhile();
    }
    if (phrase.includes(lettre) == true ) {
        return alert("super, vous avez trouvé");
    }
}

document.querySelector("#bouton").addEventListener("click", testWhile)