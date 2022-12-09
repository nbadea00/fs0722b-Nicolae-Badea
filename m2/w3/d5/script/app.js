import { Users } from "./modules/users.js";

let users = [];//array dei utenti

const url = 'json/users.json';

//chiamata ajax per ottenere i dati degli utenti
const ajaxCall = fetch(url)
    .then((response) => {
        if(!response.ok) {
            throw response.status;
        }
        return response.json()})
    .catch((err) => errorAlert(err));

async function createUser() {//funzione che aspetta la risposta da ajaxCall
    let date = await ajaxCall;

    if (typeof date === 'object') {
        for (let i of date) {//ciclo per creare i utenti
            let user = new Users(i);//nuovo oggetto Utente
            users.push(user);//aggiunta alla lista di utenti

            user.createCard();//metodo per creare le carte
        }
    }
}

function errorAlert(message) {
    let div = document.querySelector('#error-alert');
    div.textContent = 'ERROR: ' + message;
}

window.onload = createUser();