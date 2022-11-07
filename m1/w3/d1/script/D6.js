/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*
const area = (l1, l2) => l1 * l2;
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function (){
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    console.log(area(n1,n2));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*
const crazySum = function (n1, n2) {
    if (n1 == n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    console.log(crazySum(n1, n2));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*
const crazyDiff = function (n1) {
    if (n1 > 19) {
        return (n1 - 19) * 3;
    } else {
        return Math.abs(n1 - 19);
    }
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n1 = Number(document.querySelector("#n1").value);
    console.log(crazyDiff (n1));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*
const boundary = function (n) {
     return((20 < n && n <= 100) || n == 400);
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = Number(document.querySelector("#n1").value);
    console.log(boundary (n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
const epify = function (n) {
    let parola = "EPICODE";
    let controllare = false;
    if (parola == n.substring(0, 7)) {
        return n;
    } else {
        return parola + " " + n;
    }
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(epify(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*
const check3and7 = function (n) {
    if( n > 0){
        if( n % 3 == 0 && n % 7 == 0){
            return "Il numero è multiplo sia di 3 che di 7";
        }else if( n % 7 == 0){
            return "Il numero è multiplo di 7";
        }else if( n % 3 == 0){
            return "Il numero è multiplo di 3";
        }else{
            return "Il numero non è multiplo di 3 ne di 7";
        }
    }else{
        return "Il numero è negativo"
    }
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(check3and7(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*
const reverseString = function (n) {
    let strRevers = "";

    for (let i = 0; i < n.length; i++) {
        strRevers += n[n.length - (i + 1)]
    }
    return strRevers;
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(reverseString(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*
const upperFirst = function (n) {

    let scamb = "";
    let strUpper = "";

    n = n.split(" ");
    
    for( let i = 0 ; i < n.length ; i++){
        scamb = n[i][0].toUpperCase();
        n[i] = n[i].replace( n[i][0], scamb);
        strUpper += n[i] + " ";
    }

    return strUpper;
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(upperFirst(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*
const cutString = function (n) {
    let str = n.slice(1, -1);
    return str;
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(cutString (n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*
const giveMeRandom = function (n) {
    let num = [];
    for( let i = 0 ; i < n ; i++){
        num[i] = Math.floor(Math.random()*10);
    }
    return num;
};
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(giveMeRandom(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */
