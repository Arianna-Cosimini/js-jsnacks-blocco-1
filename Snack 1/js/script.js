let userQuestion1 = prompt ("Scrivi la prima parola");
console.log(userQuestion1)
let userQuestion2 = prompt ("Scrivi la seconda parola");
console.log(userQuestion2)


let resultElement="" ;
let resultSmall = userQuestion1.length;
let resultBig  =  userQuestion2.length;


    if(resultSmall < resultBig){
        
    resultElement=`La parola più corta é: <br> ${userQuestion1}`;
        
    }else if(resultBig < resultSmall){
        resultElement=`La parola più corta é: <br> ${userQuestion2}`;
    }

    document.getElementById("result").innerHTML = resultElement;

