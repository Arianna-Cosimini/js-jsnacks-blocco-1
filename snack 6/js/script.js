let sum = 0;
let myButton = document.querySelector(".btn").addEventListener("click",
    function () {
        let resultElement = document.querySelector("p");
        
        for (let i = 1; i <= 10; i++) {
            sum += i;
        }

        let average = sum / 10;

        resultElement.innerHTML += "La somma dei primi 10 numeri è: " + sum + "<br>";
        resultElement.innerHTML += "La media dei primi 10 numeri è: " + average + "<br>";
    }
);
