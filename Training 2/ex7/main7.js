let faireChoix = function() {
    let choose = prompt("choisissez entre le 1, le 2 ou le 3");
    switch (choose) {
        case "1":
            alert("1.Merci")
            break;
        case "2":
            alert("2.Bonjour")
            break;
        case "3":
            alert("3.Au revoir")
            break;
        default:
            alert("Pardon, que voulez-vous?");
    };
}


document.querySelector("#bouton").addEventListener("click",faireChoix);