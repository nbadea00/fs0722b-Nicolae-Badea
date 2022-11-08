// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/*
const checkArray = function (n) {
    let sum = 0;
    for( let i of n){
        if( i >= 5){
            console.log("Il numero " + i + " è maggiore di 5");
            sum +=Number(i);
        }else{
            console.log("Il numero " + i + " è minore di 5");
        }
    }

    return sum;
};

const giveMeRandom = function (n) {
    let num = [];
    for( let i = 0 ; i < n ; i++){
        num[i] = Math.floor(Math.random()*10);
    }
    return checkArray(num);
};

let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    console.log(giveMeRandom(n));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [{
    "price": 2,
    "nome": "a",
    "id": 1111,
    "quantity": 2,
},
{
    "price": 1,
    "nome": "b",
    "id": 2222,
    "quantity": 1,
},
{
    "price": 5,
    "nome": "c",
    "id": 3333,
    "quantity": 5,
}];


/*
const shoppingCartTotal = function (cart) {
    let totPrezzo = 0;
    for (let i of cart) {
        totPrezzo += i.price * i.quantity;
    }

    return totPrezzo;
}

console.log(shoppingCartTotal(shoppingCart));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/*
function addToShoppingCart( p, n, id, q){
    shoppingCart.push({"price" : p, "nome": n, "id": id, "quantity": q });
}

addToShoppingCart(3, "d", 4444, 6)

console.log(shoppingCart);
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/*
function maxShoppingCart(cart){
    let massimo = 0;
    for( let i of cart){
        if ( i.price > massimo){
            massimo = i.price;
        }
    }
    return massimo;
}

console.log(maxShoppingCart(shoppingCart));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/*
function latestShoppingCart(cart){
    return cart[cart.length-1];
}

console.log(latestShoppingCart(shoppingCart));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/*
function loopUntil(n){
    let cont = 0;
    do{
        num = Math.floor(Math.random()*9);

        if( num > n){
            cont++;
        }else{
            cont = 0;
        }

        console.log(num);
    }while( cont != 3)
}

let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let n = document.querySelector("#n1").value;
    loopUntil(n)
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/*
let numeri = [1, 2, 3, 5, "a" , "g" , 5, "g"];

function average(arr){
    let sum = 0;
    let n = 0;
    for( let i of arr){
        if(!isNaN(i)){
            sum += i;
            n++;
        }
    }
    return sum / n ;
}

console.log(average(numeri));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/*
let parole = ["io","ciao", "casa", "giardino", "cassaforte"];

function longest(arr){
    let maxLung = 0;
    let ind = 0;
    for( let i of arr){
        if( i.length > maxLung){
            maxLung = i.length
            ind = arr.indexOf(i);
        }
    }

    return arr[ind];
}

console.log(longest(parole))
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/*
let emailContent = "Le vogliamo vendere SPAM il nostro profìdotto ";

function controllaEmail(arr) {
    let controlloSpam = false;
    if ( arr.search('SCAM') != -1 || arr.search('SPAM') != -1) {
        controlloSpam = true;
    }
    return controlloSpam
}

console.log(controllaEmail(emailContent))
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/*
let data = new Date(2022, 10, 5);

function calcData(data){
    let presentDate = new Date()
    let giorni = 0;
    if(data.getTime() > presentDate.getTime() ){
        return Math.floor((data.getTime() - presentDate.getTime()) / 86400000);
    }else{
       return Math.floor((presentDate.getTime() - data.getTime()) / 86400000);
    }
}

console.log(calcData(data));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/*
function matrixGenerator( x, y){
    let matrice = [];
    for( let i = 0; i < y ; i++){
        matrice[i] = new Array();
        for( let j = 0 ; j < x ; j++){
            matrice[i][j] =String(i) + String(j);
        }
    }
    return matrice;
}

let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function (){
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    console.log(matrixGenerator(n1,n2));
});
*/

/* SCRIVI QUI LA TUA RISPOSTA */
