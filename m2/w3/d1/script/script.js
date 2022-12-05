{
    //costruttore utente
    function utente (nome, cognome, dataNascita) {

        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = new Date(dataNascita);

        this.eta = function () {//metodo calcolo del eta
            let currentDay = new Date();
            return parseInt((currentDay.getTime() - this.dataNascita.getTime() ) / (86400000 * 365));
        };

        this.tableAdd = function () {// metodo per aggungere alla tabella
            let tabel = document.getElementById('tabella');
            let tr = document.createElement('tr');
            let tdNomeCognome = document.createElement('td');
            let tdDataNascita = document.createElement('td');

            tdNomeCognome.textContent = `${this.nome} ${this.cognome}`;
            tdDataNascita.textContent = `${this.eta()}`;

            tr.classList.add('border-bottom', 'border-dark');

            tr.append(tdNomeCognome);
            tr.append(tdDataNascita);
            tabel.lastElementChild.append(tr);
        };
    }



    //aggiunta evento al bottone del form
    let bottone = document.getElementById('bottone');

    bottone.addEventListener('click', addUtente)


    function addUtente(){
        let nome = document.getElementById('nome').value;
        let cognome = document.getElementById('cognome').value;
        let dataNascita = document.getElementById('data-nascita').value;

        user = new utente(nome, cognome, dataNascita);

        user.tableAdd();
    }
}