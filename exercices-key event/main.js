// Exercice 1: Faire changer la couleur de fond de la DIVà chaque fois que l'on appuie sur une touche numérique de 0 à 9 sur le clavier

let press = document.querySelector('#character');

function changeColor() {
    switch (event.key) {
        case "0":
            press.style.backgroundColor = "green";
            break;
        case "1":
            press.style.backgroundColor = "pink";
            break;
        case "2":
            press.style.backgroundColor = "black";
            break;
        case "3":
            press.style.backgroundColor = "yellow";
            break;
        case "4":
            press.style.backgroundColor = "red";
            break;
        case "5":
            press.style.backgroundColor = "gray";
            break;
        case "6":
            press.style.backgroundColor = "purple";
            break;
        case "7":
            press.style.backgroundColor = "brown";
            break;
        case "8":
            press.style.backgroundColor = "blue";
            break;
        case "9":
            press.style.backgroundColor = "magenta";
            break;
    }
}

document.addEventListener("keydown", changeColor);

// Exercice 2: Pour chaque div ajouter la classe 'highlight' quand une des touches directionnelles est enfoncée -
//    Pour chaque div retirer la classe 'highlight' quand on relâche la touche

let arrowUp = document.querySelector('#up');
let arrowDown = document.querySelector('#down');
let arrowLeft = document.querySelector('#left');
let arrowRight = document.querySelector('#right');

function pressArrow() {
    switch (event.key) {
        case 'ArrowUp':
            arrowUp.classList.add('highlight');
            break;
        case "ArrowDown":
            arrowDown.classList.add('highlight');
            break;
        case "ArrowLeft":
            arrowLeft.classList.add('highlight');
            break;
        case "ArrowRight":
            arrowRight.classList.add('highlight');
            break;
    }
};

function releaseArrow(event) {
    switch (event.key) {
        case "ArrowUp":
            arrowUp.classList.remove('highlight');
            break;
        case "ArrowDown":
            arrowDown.classList.remove('highlight');
            break;
        case "ArrowLeft":
            arrowLeft.classList.remove('highlight');
            break;
        case "ArrowRight":
            arrowRight.classList.remove('highlight');
            break;
    }

};


document.addEventListener("keydown", pressArrow);
document.addEventListener("keyup", releaseArrow);