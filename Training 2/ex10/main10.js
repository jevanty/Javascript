
let total = 0;

let somme = function () {
  
   for (i = 0; i < 3; i++) {
        let number = prompt("entrez un chiffre");
        let numberIn = parseInt(number);
        // total = total + numberIn;
        total += numberIn;
   };
   alert("La somme totale est " + total);
   location.reload();
};

document.querySelector("#bouton").addEventListener("click", somme)