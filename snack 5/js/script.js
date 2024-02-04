let myButton = document.querySelector(".btn").addEventListener("click",
    function () {
        let inputElement = document.getElementById("userChoice");
        let resultElement = document.querySelector("p");

        let inputValue = +inputElement.value;

        if (!isNaN(inputValue) && inputValue > 0) {
            resultElement.innerHTML = "";

            for (let i = 1; i <= inputValue; i++) {
                let cubo = Math.pow(i, 3);

                resultElement.innerHTML += "Il cubo di " + i + " è: " + cubo + "<br>";
            }
        } else {
            alert("Inserisci un numero valido e maggiore di zero.");
        }
    }
);
