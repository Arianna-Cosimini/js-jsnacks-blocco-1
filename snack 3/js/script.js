let numbers = [];
let value = 0;



let myButton = document.querySelector(".btn").addEventListener("click",

    function(){
        let userNumber = document.getElementById("userChoice").value;

        let inputValue =Number (userNumber);
        console.log(userNumber)

        if(!isNaN(inputValue) && inputValue % 2 ==! 0 ){

            numbers.push(inputValue);
            value++;
            
            document.getElementById("userChoice").value = "";

            if(value === 6){
                let result = document.querySelector("p").innerHTML = `Numeri dipari inseriti <br> ${numbers}`;
                
                console.log (numbers)
            }
        }
    }

)

