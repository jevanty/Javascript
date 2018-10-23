let a = 3;
let b = 2;

function triple(x) {
    return (x * 3);
}


function affiche() {
    alert(triple(a));
    alert(triple(b));
}

document.querySelector("#bouton").addEventListener("click", affiche);