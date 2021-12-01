let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-zl");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


let rateEUR = 4.42;
let rateDOLAR = 3.90;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "DOLAR":
            result = amount / rateDOLAR;
            break;
    }


    resultElement.innerHTML = `${result.toFixed(2)}`;

});


let mojaliczba = 2;

let nazwa =liczba => liczba * 8; 



console.log(nazwa(mojaliczba));
