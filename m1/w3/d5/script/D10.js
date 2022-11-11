/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

{
  let sum = 10 + 20;
  console.log("A) ", sum);
}

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

{
  let random = Math.random() * 20;
  console.log("B) ", random);
}

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

{
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };
  console.log("C)", me)
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

{
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };
  delete me.age;
  console.log("D)", me);
}

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

{
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };
  let skills = ['python', 'C', 'C++', 'javascript'];

  me.skills = skills;
  console.log("E)", me);
}

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

{
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };
  let skills = ['python', 'C', 'C++', 'javascript'];

  me.skills = skills;

  me.skills.push('java');

  console.log("F)", me);
}

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

{
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };
  let skills = ['python', 'C', 'C++', 'javascript'];

  me.skills = skills;

  me.skills.pop();

  console.log("G)", me);
}

// Funzioni

console.log("----------------------------Funzioni------------------------------------")

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

{
  function dice() {
    return Math.ceil(Math.random() * 6)
  }
  console.log("1)", dice());
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

{
  function whoIsBigger(num1, num2) {
    return (num1 > num2) ? num1 : num2;
  }


  document.getElementById('puls-numeri').addEventListener('click', function () {
    let numero1 = 0;
    let numero2 = 0;
    numero1 = parseInt(document.getElementById('c1').value);
    numero2 = parseInt(document.getElementById('c2').value);
    (numero1 != numero2) ? console.log("2)Il numero maggiore è : ", whoIsBigger(numero1, numero2)) : console.log("2)I numeri sono uguali");

    document.getElementById('c1').value = "";
    document.getElementById('c2').value = "";
  })

}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

{
  function splitMe(str) {
    return str.split(" ");
  }

  document.getElementById('puls-testo').addEventListener('click', function () {
    let testo = ""
    testo = document.getElementById('str').value
    console.log("3)", splitMe(testo));
    document.getElementById('str').value = "";
  })
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

{
  function deleteOne(str, bool) {
    return bool ? str.slice(1) : str.slice(0, -1)
  }

  document.getElementById('puls-parola').addEventListener('click', function () {
    let testo = ""
    let bool;
    testo = document.getElementById('str').value
    bool = Number(document.getElementById('lettera').value)
    console.log(deleteOne(testo, bool));
    testo = document.getElementById('str').value = "";
  })
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

{
  function onlyLetters(str) {

    /*
    for (let i of str) {
      for (let j = 0; j <= 9; j++) {
        if (i == j) {
          str = str.replace(j, "");
        }
      }
      str = str.replace("  ", " ")
    }
    */

    do {
      if (str.search('[0-9]') != -1) {
        str = str.replace(str[str.search('[0-9]')], "");
      }
      str = str.replace("  ", " ");
    } while (str.search('[0-9]') != -1);


    return str;
  }


  document.getElementById('puls-frase').addEventListener('click', function () {
    let testo = ""
    testo = document.getElementById('str').value
    console.log("5)", onlyLetters(testo));

    document.getElementById('str').value = "";
  })

}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

{
  function isThisAnEmail(str) {
    return str.search('[A-z0-9]+@[A-z]+[\.]+[a-z]');
  }

  document.getElementById('puls-email').addEventListener('click', function () {
    let testo = ""
    testo = document.getElementById('str').value
    isThisAnEmail(testo) != -1 ? console.log("6)L'email è valida") : console.log("6)L'email non è valida")

    document.getElementById('str').value = "";
  })

}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

{
  function whatDayIsIt() {
    let data = new Date()
    let day = data.getDay()
    var giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    console.log("7)", giorni[day]);
  }
  whatDayIsIt()
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

{
  let dado = { sum: 0, values: [] }

  function dice() {
    num = Math.ceil(Math.random() * 6)
    dado.sum += num
    dado.values.push(num)
  }
  function rollTheDices(num) {
    dado.sum = 0;
    dado.values = [];
    for (let i = 0; i < num; i++) {
      dice()
    }
    return dado;
  }

  document.getElementById('puls-dado').addEventListener('click', function () {
    let numero = document.getElementById('c1').value
    console.log("8)", rollTheDices(numero));

    document.getElementById('c1').value = "";
  })
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
{
  function howManyDays(data) {
    let dataOggi = new Date();
    let dataPar = new Date(data);
    let giorni = 0;
    if (dataPar.getTime() > dataOggi.getTime()) {
      return "Hai inserito una data futura";
    } else {
      return Math.floor((dataOggi.getTime() - dataPar.getTime()) / 86400000);
    }
  }

  document.getElementById('puls-data').addEventListener('click', function () {
    let data = document.getElementById('date').value
    console.log("9)", howManyDays(data));

    document.getElementById('date').value = "";
  })
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
{
  function isTodayMyBirthday(data) {
    let dataOggi = new Date();
    let dataPar = new Date(data);
    if (dataOggi.getDate() == dataPar.getDate() && dataOggi.getMonth() == dataPar.getMonth()) {
      return true;
    } else {
      return false;
    }
  }

  document.getElementById('puls-data-comple').addEventListener('click', function () {
    let data = document.getElementById('date').value

    isTodayMyBirthday(data) ? console.log("Buon compleanno!") : console.log("Non è il tuo compleanno");

    document.getElementById('date').value = "";
  })

}

// Arrays & Oggetti

console.log("----------------------------Arrays & Oggetti------------------------------------")

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
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


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

{
  function deleteProp(ogj, str) {
    delete ogj[str]
    return ogj;
  }
  let me = {
    'name': 'Nicolae',
    'surname': 'Badea',
    'age': 21
  };

  console.log("11)", deleteProp(me, 'age'));
}




/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

{
  function newestMovie(film) {
    let piuRecente = 0;
    let ind = 0;
    for (let i of film) {
      if (i.Year > piuRecente) {
        piuRecente = i.Year;
        ind = film.indexOf(i)
      }
    }
    return film[ind];
  }

  console.log("12)", newestMovie(movies))
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

{
  function countMovies(film) {
    return film.length;
  }
  console.log("13)Il numero di film:", countMovies(movies))
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

{
  function onlyTheYears(film) {
    let anniFilm = []
    for (let i of film) {
      anniFilm.push(i.Year);
    }
    return anniFilm;
  }
  console.log("14)", onlyTheYears(movies))

}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
{
  function onlyInLastMillennium(film) {
    let filmMillennium = [];
    for (let i of film) {
      if (i.Year <= 2000 && i.Year > 1000) {
        filmMillennium.push(i)
      }
    }
    return filmMillennium;
  }

  console.log("15)", onlyInLastMillennium(movies))

}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

{
  function sumAllTheYears(film) {
    let sum = 0;
    for (let i of film) {
      sum += Number(i.Year);
    }
    return sum;
  }

  console.log("16)", sumAllTheYears(movies))
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

{
  function searchByTitle(film, str) {
    let filmTrovati = []
    for (let i of film) {
      if (i.Title.toLowerCase().search(str.toLowerCase()) != -1) {
        filmTrovati.push(i);
      }
    }
    return filmTrovati;
  }
  document.getElementById('puls-film').addEventListener('click', function () {
    let testo = ""
    testo = document.getElementById('str').value

    console.log("17)", searchByTitle(movies, testo));

    document.getElementById('str').value = "";
  })

}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

{
  function searchByTitle(film, str) {
    let filmLista = { 'match': [], 'unmatch': [] }
    for (let i of film) {
      if (i.Title.toLowerCase().search(str.toLowerCase()) != -1) {
        filmLista.match.push(i);
      } else {
        filmLista.unmatch.push(i);
      }
    }
    return filmLista;
  }
  document.getElementById('puls-film-match-unmatch').addEventListener('click', function () {
    let testo = ""
    testo = document.getElementById('str').value

    console.log("18)", searchByTitle(movies, testo));

    document.getElementById('str').value = "";
  })

}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

{
  function removeIndex(film, numero) {
    film.splice(numero, 1)
    return film;
  }

  document.getElementById('puls-film-indice').addEventListener('click', function () {
    let numero = document.getElementById('c1').value

    console.log("19)", removeIndex(movies, numero));

    document.getElementById('c1').value = "";
  })
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

console.log("----------------------------DOM------------------------------------")

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

{
  function selecrContainer() {
    let container = document.getElementById('container');
    return container;
  }

  console.log("20)", selecrContainer());
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
{
  function selecrTd() {
    let td = document.getElementsByTagName('td');
    return td;
  }

  console.log("21)", selecrTd());
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

{
  function consolTdText() {
    let td = document.getElementsByTagName('td');
    for (let i of td) {
      console.log("22)", i.textContent);
    }
  }

  consolTdText();
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
{
  function colorLink() {
    let a = document.createElement('a')
    let div = document.getElementsByClassName('sand-box');
    div[0].append(a);
    let link = document.getElementsByTagName('a');

    for (let i of link) {
      console.log(i)
      i.href = "#"
      i.title = "questo è un link"
      i.style.backgroundColor = "red";
      i.textContent = "ciao "
    }
  }
  document.getElementById("nuovo-link").addEventListener('click', colorLink);
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
{
  function nuovoLi() {
    let li = document.createElement('li')
    let div = document.getElementsByClassName('sand-box');
    let ul = document.getElementById('myList');

    li.textContent = "Nuovo elemento lista";
    ul.append(li);
    div[0].append(ul);
  }
  document.getElementById("nuovo-li").addEventListener('click', nuovoLi);

}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
{
  function eliminaLista() {
    let ul = document.getElementById('myList');
    ul.textContent = ""
  }

  document.getElementById("elimina-li").addEventListener('click', eliminaLista);
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

{
  function classTr() {
    let tr = document.getElementsByTagName("tr");
    for (let i of tr) {
      i.classList.add('test');
    }
  }

  classTr();

}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

{
  function halfTree(h) {
    let div = document.createElement('div');
    let sand = document.getElementsByClassName('sand-box');
    for (let i = 0; i < h; i++) {
      let p = document.createElement('p');
      for (let j = 0; j <= i; j++) {
        p.textContent += "*";
      }
      div.append(p)
    }

    sand[0].append(div)
  }
  halfTree(7);
}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
{
  function isItPrime(n) {
    for (let i = 2; i < (n + 1) / 2; i++) {
      if ((n % i) == 0) {
        return false;
      }
    }
    return true;
  }

  document.getElementById('puls-num-primo').addEventListener('click', function () {

    numero = Number(document.getElementById('c1').value)

    console.log("29)",isItPrime(numero))

    document.getElementById('c1').value = "";
  })
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

