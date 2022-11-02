/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

number: var nomeVar = numero(es. 1, 2, 3, 4, 1.2, 12)
  variabile di tipo numerica

string: var nomeVar = "simbolo o insieme di simboli"(es. "a", "ciao", "%", "5", "2 alberi", ...)

arrey: var nomeVar = [el1, el2 el,] (lista di elementi)
  gli elementi posoono essere di qualsiasi datatype

object: var nomeVar = { 'chiave1' : valore1, 'chiave2' : valore2, ...}
  contiene coppie di chiavi e valori che descrivono l'elemento oggetto (i valori posoono essere stringe, numeri o liste) e presenta funzioni carateristiche del oggetto chiamate metodi.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var nome = prompt("Il tuo nome:");
console.log("2)Il tuo nome: " + nome);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log("3)12 + 20 = " + (12 + 20));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x;
x = 12;
console.log("4)x = " + x);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var nome = "Giorgio";

nome = prompt("Inserire il proprio nome:");
console.log("5)Inserire il proprio nome: " + nome);

/*
const cognome = Badea;
const cognome = prompt("Inserire cognome:");
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("6)4 - x = " + (4 - x));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";
console.log("7)")
console.log(name1 + " == " + name2);
console.log(name1 == name2);
console.log(name1 + " == " + name2.toLowerCase());
console.log(name1 == name2.toLowerCase());



/* SCRIVI QUI LA TUA RISPOSTA */
