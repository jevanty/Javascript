let tab = [-2,1,4];

function addition(x) {
    return x + 2;
}

function affiche() {
    for (i = 0; i < tab.length; i++) {
        if (i !== 1) {
            alert(addition(tab[i]));
        }
    }
}

document.querySelector("#bouton").addEventListener("click", affiche);