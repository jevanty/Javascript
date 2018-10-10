
// EXERCICE 1 : Manipulation de classes

let body = document.querySelector('body');

body.classList
// DOMTokenList [ "bg-aqua" ]
body.classList.remove('bg-aqua');

body.classList.add('bg-olive');

let firstP = document.querySelector('#first-paragraph');

firstP.classList;
// DOMTokenList [ "bg-lime", "gray" ]
firstP.classList.remove('bg-lime','gray');

firstP.classList.add('aqua');

let silver = document.querySelectorAll('.bg-silver');

for (i=0;i<silver.length;i++) {
    silver[i].classList.add('bg-teal');
    silver[i].classList.remove('bg-silver');
}

let bloc = document.querySelectorAll('blockquote');

for (i=0;i<bloc.length;i++) {
    bloc[i].classList.add('bg-white');
}

// EXERCICE 2 : Selecteurs CSS

let table = document.querySelector('#my-table');

table.classList.add('bg-purple');

let p = document.querySelectorAll('.container > p ');

for (i=0;i<p.length;i++) {
    p[i].classList.add('shadow');
}

// EXERCICE 3 

let pre = document.querySelectorAll('pre');

for (i=0;i<pre.length;i++) {

pre[i].style.color = "red";
pre[i].style.backgroundColor = "grey";
pre[i].style.borderBottom = "3px solid red";
// pre[i].style.cssText = "border-bottom: 3px solid red;background-color: grey";
};

let htrois = document.querySelectorAll('h3');

htrois[1].style.color = "red";
htrois[0].innerHTML = "<em>Italic title ! yeah !</em>";

let hdeux = document.querySelectorAll('h2');

hdeux[0].style.color = "yellow";
hdeux[0].innerText = "<strong>HTML doesn't work !</strong>";

// EXERCICE 4 : Création d'éléments

let ul = document.querySelector('ul');

let li = document.createElement("li");
li.innerHTML='Mon meilleur ami est <a href="http://www.google.com">Google</a>';
ul.append(li);

let lien = document.querySelector('ul li a');

lien.style['color'] = "red";

// EXERCICE 5 : Création et suppression d'éléments

let oli = document.querySelector('ol');

while (oli.hasChildNodes()) {
    oli.removeChild(oli.firstChild);
} 


let tabli = ['Silent Teacher','Code Monkey','CodeCombat']

for (let i = tabli.length - 1; i >= 0; i--) {
    let newList = document.createElement('li');
    oli.appendChild(newList);
    newList.innerHTML = tabli[i];    
}




    // faire une boucle sur tous les enfants du tableau précédement crée

    // pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()

    // ajouter à chaque 'li' la valeur courrante tableau

    // ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné










