/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* ho suato il prompt solo per fare prima*/

/*
var num1 = parseInt(prompt("Primo numero:"))
var num2 = parseInt(prompt("Secondo numero:"))

if( num1 > num2){
  console.log(num1 + " > " + num2)
}else if( num1 < num2){
  console.log(num1 + " < " + num2)
}else{
  console.log(num1 + " = " + num2)
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
(prompt("Numero da comparare:") != 5) ? alert("Il numero è diverso") : console.log("Il numero è uguale")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
((prompt("Numero da dividere per 5:") % 5) == 0) ? alert("Il numero è divisibile per 5") : console.log("Il numero non è divisibile per 5")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
var num1 = parseInt(prompt("Primo numero:"));
var num2 = parseInt(prompt("Secondo numero:"));

if( num1 == 8 || num2 == 8){
  console.log("Il primo numero, il secondo numero o entrambi sono uguali a 8");
}else if((num1 + num2) == 8){
  console.log("La loro somma è uguali a 8");
}else if(Math.abs(num1 - num2) == 8){
  console.log("La loro sottazione è uguali a 8");
}else{
  console.log("somma/sottazione/num1/num2 != 8");
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
var totalShoppingCart = 49;

if(totalShoppingCart <= 50){
  totalShoppingCart += 10;  
}

console.log(totalShoppingCart);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
var totalShoppingCart = 49;
var totalShoppingCartScont = totalShoppingCart * 0.8;

if(totalShoppingCartScont <= 50){
  totalShoppingCartScont += 10;  
}

console.log(totalShoppingCartScont);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
var num = [2];
var scambia = 0;

num[0] = parseInt(prompt("Primo numero:"));
num[1] = parseInt(prompt("Secondo numero:"));
num[2] = parseInt(prompt("Terzo numero:"));
for( var n = 0 ; n < 3 ; n ++){
  for( var i = 0 ; i < (3 - n) ; i++){
    if((num[i] < num[i+1]) ){
      scambia = num[i];
      num[i] = num[i+1];
      num[i+1] = scambia;
    }
  }
}

console.log(num);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*
let test = "5";
if( typeof test === "number"){
  console.log("è un numero")
}else{
  console.log("Non è un numero")
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
var num = prompt("Inserire un numero:");

if( (num % 2) == 0){
  console.log("Il numero è pari")
}else{
  console.log("Il numero è dispari")
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

/*
  let val = 11
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log(me);

me.cità = "Toronto";

console.log(me);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*
delete me.lastName;
console.log(me);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*
delete me.skills[(me.skills.length-1)]
console.log(me);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*
var numeri = [];

for( var i = 0 ; i < 10; i++){
  numeri[i] = i + 1;
}

console.log(numeri);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*
numeri[numeri.length - 1] = 100;
console.log(numeri);
*/

/* SCRIVI QUI LA TUA RISPOSTA */
