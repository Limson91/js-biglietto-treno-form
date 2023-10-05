// - Chiedere i chilometri del viaggio tramite input-text;
//     - dichiarare una variabile;
//     - assegnare alla variabile il valore preso dall'input-text del DOM;
const inputDOMElement = document.getElementById('km-ticket');
console.log(inputDOMElement);

// - Collegare il pulsante dal DOM;
const btnDOMElement = document.getElementById('btn-calc-price');
console.log(btnDOMElement);

// - Collegare il testo prezzo dal DOM;
const prezzoDOMElement = document.getElementById('price');

// - Creare un EventListener di click sul bottone;
//     - all'interno, calcolare il prezzo del biglietto intero.
//     - assegnare una variabile;
//     - calcolare il prezzo base (0.21€/km);
//     - Sostituire il testo con il risultato dell'operazione;
btnDOMElement.addEventListener("click", function () {    
    const km = parseInt(inputDOMElement.value);
    console.log(km);

    const prezzoBase = km * 0.21;
    console.log(prezzoBase);

    prezzoDOMElement.innerHTML = prezzoBase.toFixed(2) + '&euro;'  
});


// - Chiedere l'età;
//     - dichiarare una variabile;
//     - assegnare alla variabile il valore preso dal select del DOM;
// - Impostare lo sconto eventuale;
//     - IF l'età è minore o uguale a 18;
//         - impostare lo sconto pari al 20% del prezzo base;
//     - ELSE IF l'età è maggiore o uguale a 65;
//         - impostare lo sconto pari al 40%;
//     - ELSE il prezzo base rimane invariato.

// - Impostare il prezzo a due cifre decimali. 