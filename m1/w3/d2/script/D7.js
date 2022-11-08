/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

/*
function strConect(str1,str2){
  let str = "";
  str = str1.substring(0,1) + str2.substring((str2.length - 3), str2.length);
  console.log(str2.length-3)

  return str;
}

let a = "ciao"
let b = "cassaforte"

console.log(strConect(a,b))
*/

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
*/

/*
function numDispari(n){
  let num = []
  for( let i = 1 ; i < n ; i+=2){
    num.push(i);
  }
  return num; 
}

let numeri = 100;

console.log(numDispari(numeri))
*/

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
*/

/*
function numMult5(n) {
  let num = []
  for (let i = 0; i <= n; i += 5) {
    num.push(i);
  }
  return num;
}

let numeri = 100;

console.log(numMult5(numeri))
*/

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

/*
function numRandom() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }

  return arr;
}
console.log(numRandom())
*/

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
*/

/*
function pari(numeri){

  let arrPari = []
  for( let i of numeri){
    if( (i % 2) == 0){
      arrPari.push(i);
    }
  }

  return arrPari;

}

let num = [];
for(let i = 0; i < 10 ; i++ ){
  num[i] = Math.floor(Math.random()*100);
}
console.log(num)
console.log(pari(num))
*/

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
*/

/*
function somma(numeri){
  let sum = 0;
  for( let i of numeri){
    sum += i;
  }

  return sum;
}

let num = [];
for(let i = 0; i < 10 ; i++ ){
  num[i] = Math.floor(Math.random()*100);
}
console.log(num)
console.log(somma(num))
*/

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

/*
function add1(numeri){
  let arrTras = [];
  for(let i = 0 ; i < numeri.length ; i++){
    arrTras[i] = numeri[i] + 1;
  }

  return arrTras;
}

let num = [];
for(let i = 0; i < 10 ; i++ ){
  num[i] = Math.floor(Math.random()*100);
}
console.log(num)
console.log(add1(num))
*/

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/*
function lunghezzaArray(arr){

  let lungStr = []
  for(let i = 0 ; i < arr.length ; i++){
    lungStr[i] = arr[i].length
  }

  return lungStr;
}

let parole = ["EPICODE", "is", "great", "cassaforte"]

console.log(lunghezzaArray(parole))
*/

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

/*
function eliminaPari(numeri) {
  let arr = [];
  for (let i = 0; i < numeri.length; i++) {
    if ((numeri[i] % 2) != 0) {
      arr.push(numeri[i]);
    }
  }
  numeri = arr;
  return numeri;
}

let num = [];
for (let i = 0; i < 10; i++) {
  num[i] = Math.floor(Math.random() * 100);
}
console.log(num)
console.log(eliminaPari(num))
*/

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

/*
function a (){
let arr = [];
let num;
for(let i = 0; i < 10 ; i++){
  num = Math.floor(Math.random()*100);
  if( arr.indexOf(num) == -1 ){
    arr[i] = num
  }else{
    i--;
  }
}

return arr;
}
console.log(a())
*/

/*
function arrayRandom(){ //creo la funzione arrayRandom che non richiede parametri in ingresso 
  let array = []; //creo un array vuoto chiamato array
  let numeroRandom = 0;  //creo la variabile numero rando nella quale verra memorizato un numero random (più avanti nel codice)
  let i = 0; // creo l'indice i utile per il ciclo while util per il passagio succesivo
  while( i < 10){ //appro il ciclo while e faccio ciclare fin che l'indice non sara superiore a 10 (in questo caso quindi unavolta chiuso il ciclo crerea un array di 10 elementi)
    numeroRandom = Math.floor(Math.random() * 11); //alla variabile numeroRandom affindo un numero random da 0 -10 incluso 
    if(!array.includes(numeroRandom)){ //avio un if dove diro se in tutto l'array non essiste il valore preneste nella variabile numeroRando allora verifica la condizione interna
      array.push(numeroRandom); //se la condicione sara verifivata nel if pusho nel nostro array la variabile numeroRandom
      i++; //aumento il contatore del while (in questo caso solo se la condizione del if sara verificata)
    }

  }
  return array;//ritorno l'array

}

let array = arrayRandom()

console.log(array);
*/


/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/


function arrRevers(numeri){
  let arrTras = []
  for( let i = 0 ; i < numeri.length ; i++){
    arrTras[i] = numeri[numeri.length - i - 1];
  }

  numeri = arrTras;

  return numeri;
}

let num = [];
for(let i = 0; i < 10 ; i++ ){
  num[i] = Math.floor(Math.random()*100);
}
console.log(num)
console.log(arrRevers(num))


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/*
function fileVecchio(arr){
  let piuVecchio = 0;
  for( let i = 0 ; i < arr.length ; i++){
    if(arr[i].Year < arr[piuVecchio].Year){
      piuVecchio = i;
    }
  }

  return arr[piuVecchio]
}

console.log(fileVecchio(movies))
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/*
function numFilm(arr){
  let cont = 0;
  for( let i of arr){
    if( i.Type == "movie"){
      cont++
    }
  }

  return cont;
}

console.log("Ci sono N: " + numFilm(movies) + " film")
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/*
function titlrFilm ( arr ){
  let titoli = []
  for( let i of arr){
    titoli.push(i.Title);
  }

  return titoli;
}

console.log(titlrFilm(movies))
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/*
function filmMillennio(arr, millennio){
  let film = []
  for( let i of arr){
    if( i.Year > millennio){
      film.push(i)
    }
  }

  return film;
}

console.log(filmMillennio(movies,2000))
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/*
function trovaFilm(arr, id){
  let film = []
  for( let i of arr){
    if( i.imdbID == id){
      film = i;
      break;
    }
  }

  return film;
}
let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let id = document.querySelector("#input").value;
    console.log(trovaFilm(movies, id))
});
*/

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/*
function sommaAnni(arr){
  let sum = 0;
  for( let i of arr){
    sum += Number(i.Year);
  }
  return sum;
}

console.log(sommaAnni(movies))
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

/*
function cercaFilm(arr, parola){
  parola = parola.toLowerCase()
  let film = []
  for ( let i of arr){
    for ( let j of Object.values(i)){
      j = j.toLowerCase()
      if((film.indexOf(i.imdbID) == -1) && (j.search(parola) != -1))film.push(i);

    }
  }

  return film;
}

let pulsante = document.querySelector("#puls");

let supp = pulsante.addEventListener(`click`, function () {
    let id = document.querySelector("#input").value;
    console.log(cercaFilm(movies, id))
});
*/