// - Collegare il bottone di calcolo del prezzo dal DOM
const btnDOMElement = document.getElementById('btn-calc-price');
console.log(btnDOMElement);

// - Chiedere i chilometri del viaggio;
//     - dichiarare una variabile;
//     - assegnare alla variabile il valore preso dall'input-text del DOM;
const kmDOMElement = document.getElementById('km-ticket');
console.log(kmDOMElement);

// - Collegare l'elemento html a cui sostituire il valore col prezzo finale
const priceDomElement = document.querySelector('.price');

// - Funzione Listener click al bottone
btnDOMElement.addEventListener('click', function() {
// - Stampo il valore dei km inseriti dallo user.
    const km = parseInt(kmDOMElement.value);
    console.log('I km inseriti sono', km);

// - Moltiplicare i km inseriti con il prezzo a km;
    const prezzoBase = km * 0.21;
    console.log('Il prezzo base è pari a', prezzoBase, 'euro');

    priceDomElement.innerHTML = prezzoBase.toFixed(2) + 'euro';

    if (kmDOMElement.value="") {
        console.log('Inserire km');
    }
}) 