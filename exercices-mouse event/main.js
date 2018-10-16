
// Exercices 1: Faire disparaître les divs ".hoverMe" lorsque l'on passe la souris dessus


let hover = document.querySelectorAll(".hoverMe");


for (i = 0; i < hover.length; i++) {
    let hoveri = hover[i]
    hoveri.addEventListener("mouseover", function (event) {
        event.target.style.visibility = "hidden";

    })
}

// Exercices 2: Faire de sorte que quand on clique sur button "#reset", il fasse réapparaitre les 3 divs premièrement créées

let reset = document.getElementById("reset");


function show() {

    for (i = 0; i < hover.length; i++) {
        let hoveri = hover[i]

        hoveri.style.visibility = "visible";

    }
};

reset.addEventListener("click", show);

// Exercices 3: Faire de sorte que lorsque l'on bouge la souris dans la fenêtre, la position soit affichée dans les divs (id="axe-x, axe-y) associées

let axeX = document.getElementById("axe-x");
// let axeX= document.querySelector("#axe-x");
let axeY = document.getElementById("axe-y");
// let axeY= document.querySelector("#axe-y");

window.addEventListener("mousemove", function (event) {

    let positionX = event.clientX;
    let positionY = event.clientY;
    axeX.innerHTML = positionX;
    axeY.innerHTML = positionY;
})




