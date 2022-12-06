import { Person } from "./moduli/Person.js";
import { PageContent } from "./moduli/PageContent.js";


let p1 = new Person("a", 12);
let p2 = new Person("b", 11);
let p3 = new Person("c", 6);

console.log(Person.comparAgeText(p1, p2));
console.log(Person.comparAgeText(p2, p3));
console.log(Person.comparAgeText(p1, p3));


/*----------------------------------------------------------------------------------------------*/

let users = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
];

let numeroElementi = 5;//può variare tra 2 e user.length

let usersTable = new PageContent( users, numeroElementi);//creazione nuovo oggetto PageContent

usersTable.writeInTable(0);//funzione per inizializare la tabella

document.getElementById('primo').addEventListener('click', function(){//evento per visualizzare i primi (numeroElementi) elementi
    usersTable.goFirst();
});
document.getElementById('succesivo').addEventListener('click', function(){//evento per scorrere di uno in avanti
    usersTable.goNext();
});
document.getElementById('precedente').addEventListener('click', function(){//evento per scorrere di uno indietro
    usersTable.goBefore();
});
document.getElementById('ultimo').addEventListener('click', function(){//evento per visualizzare i ultimi (numeroElementi) elementi
    usersTable.goLast();
});