let character = {

    name: "Dul",
    age: 27,
    items_to_give: ["sword", "knife", "gun"],

    giveItem() {
        let itemlist = this.items_to_give[Math.floor(Math.random() * this.items_to_give.length)];
        console.log(itemlist)
    },
}

character.giveItem();

for (let key in character) {

    console.log(character[key]);

}

// ----------------

let character2 = {

    name: "Dul",
    age: 27,
    items_to_give: [],

    giveItem() {
        let items = ["sword", "gun", "knife"]
        let weapon = items[Math.floor(Math.random() * items.length)];
        this.items_to_give.push(weapon);
        console.log(this.items_to_give);
    },
}

character2.giveItem();

for (let key in character2) {

    console.log(character2[key]);

}

// ----------------

class Characteristic {
    constructor(title, physic, magic, minLevel, available) {
        this.title = title;
        this.physic = physic;
        this.magic = magic;
        this.minLevel = minLevel;
        this.available = available;

    }

}

let epee = new Characteristic("A", 10, 2, 7, true);
let hache = new Characteristic("B", 11, 1, 10, false);
let sceptre = new Characteristic("C", 3, 15, 12, true);

let objectToSell = [epee, hache, sceptre];

function afficher() {

    for (let key in objectToSell) {

        let affiche = objectToSell[key];
        console.log(affiche);

    };

}

afficher();

function afficherAvailable() {

    for (let key in objectToSell) {

        let avaibility = objectToSell[key].available;

        if (avaibility == true) {

            let name = objectToSell[key].title;
            console.log(name + " est disponible");

        }

        else {

            let name = objectToSell[key].title;
            console.log(name + " n'est pas disponible");
        }
    }

}

afficherAvailable();

function levelMin() {

    for (let key in objectToSell) {

        let level10 = objectToSell[key].minLevel;

        if (level10 >= 10) {

            let name = objectToSell[key].title;
            console.log(name + " a un niveau minimum de 10");

        }

        else {

            let name = objectToSell[key].title;
            console.log(name + " n'a pas le niveau minimum");
        }
    }
}
levelMin();

// --------------------

let mainCharacter1 = {


    name: "Dul",
    level: 10,
    life: 98,
    weapon: {
        name: "excalibur",
        damage: 30
    },

    attack() {

        console.log(this.name + " attaque avec l'arme " + this.weapon.name + " et les dégâts sont " + (this.level * this.weapon.damage));
    }

}

mainCharacter1.attack();


// ------------------------





class Character {
    constructor(name, level, life) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = {
            name: "",
            damage: 15
        };
    }

    attack(enemy) {

        let damage = this.level * this.weapon.damage;
        let attaque = this.name + " attaque " + enemy.name + " avec " + this.weapon.name + " et lui inflige " + damage + " de dégats ";
          
        console.log(attaque);
        enemy.receiveDamage(damage);
    }

    receiveDamage(damage) {

        this.life -= damage;
        console.log(this.name + " a désormais " + this.life + " points de vie");   

    }
}

let opponentCharacter = new Character("ket", 10, 1000);
opponentCharacter.weapon.name = "hache";
opponentCharacter.weapon.damage = 20;

let mainCharacter = new Character("dul", 15, 1000);
mainCharacter.weapon.name = "sword";
mainCharacter.weapon.damage = 25;


// while (opponentCharacter.life > 0 ) {

// mainCharacter.attack(opponentCharacter);
// console.log (opponentCharacter.life);
// }

// if (opponentCharacter.life <= 0) {

//     console.log("dead enemy")
// }

let flag= true;

function combat (a,b) {

if (a.life > 0 && b.life > 0) {

    a.attack(b);
    b.attack(a);
}

else if (a.life <= 0) {

console.log(b.name + " win");
flag=false;

}

else if (b.life <= 0) {

    console.log(a.name + " win ");
    flag=false;
}

}

while (flag) {
    
    combat(mainCharacter,opponentCharacter);

}



