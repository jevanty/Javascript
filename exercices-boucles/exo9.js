var i = 0;

while (i <= 20) {

    if ((i % 2) == 0) {

        console.log(i + " est un nombre pair");

    }

    else {

        console.log(i + " est un nombre impair");

    }

    i++;

}

// -----------------

for (i = 0; i < 10; i++) {

    result = i * 9;
    console.log(result);
}

// -----------------

for (i = 0; i < 100; i++) {

    function grade() {

        if (i > 90) {

            console.log("Pour " + i + "points vous avez le grade A.");

        }

        else if (i > 80) {

            console.log("Pour " + i + "points vous avez le grade B.");

        }

        else if (i > 70) {

            console.log("Pour " + i + "points vous avez le grade C.");

        }

        else if (i > 65) {

            console.log("Pour " + i + "points vous avez le grade D.");

        }

        else if (i <= 65) {

            console.log("Pour " + i + "points vous avez le grade F.");

        }

        else;

    }

grade();

}


// -----------------






