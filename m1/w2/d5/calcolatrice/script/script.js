var operazione;
var soluzione;

/*
    La funzione comando serve per inserire le istruzioni nella calcolatrice
    (1+1)+(1+(1+1)+1)
    (2+(2E3+5))x2
    (2+1)x(5+(3-2)÷2)+(2E1)
*/
function comando(elementoCliccato) {
    var com = elementoCliccato.value;

    switch (com) {
        case "CA"://elimina gli elementi in #schermo (tag di input r.26 html)
            //operazione = [];
            document.getElementById("schermo").value = "";
            break;
        case "DEL"://ellimina l'umtimo elemento della stringa rim = carateri già inseriti
            let rim = document.getElementById("schermo").value;
            //rimozione del carattere
            rim = rim.substring(0, rim.length - 1)
            //inserimento della stringa corretta
            document.getElementById("schermo").value = rim;
            break;
        case "Ans"://restituisce il risultato precedente 
            document.getElementById("schermo").value += soluzione;
            break;
        case "EXP":
            document.getElementById("schermo").value += "E";
            break;
        default:
            document.getElementById("schermo").value += com;
            //operazione[operazione.length] = com;

            if (com == "=") {
                operazione = document.getElementById("schermo").value; // serve per prendere le opperazioni da schermo
                risultato = risolviParentesi(operazione);//funzione
                soluzione = risultato;
                document.getElementById("schermo").value += soluzione;
            }
            break;
    }

}

/*
    Per l'ordine delle parentesi ho pensato di concentrarmi sempre sulla parentesi più interna per poi sostituire il risultao
    (es. (1+1) + (1+(1+1)+1) prima calcolo la prima parentesi -> 2 + (1+(1+1)+1) poi calcolo quella interna -> 2+(1+2+1))
    quindi alla fine l'unico problema era riuscire ad ridursi sempre a un'operazione del tipo (n...) è avere una funzione per risolvere le parentesi singole.
*/

function contaParentesi(strNumeri) { //serve per prendere gli indici delle parentesi
    let parNum = [];
    for (let i = 0; i < strNumeri.length; i++) {
        if (strNumeri[i] == "(" || strNumeri[i] == ")") {
            parNum[parNum.length] = i;
        }
    }
    return parNum;
}

function risolviParentesi(strNumeri) {
    let parNum = contaParentesi(strNumeri);
    let parNumI = contaParentesi(strNumeri);//uso per scorrere
    let parRisolt = strNumeri;
    let contenutoPar = [];
    let risultatoPar = [];
    let a = 0;

    for (let i = 0; i < parNum.length; i++) {

        //se ci sono due parentesi che si chiudono allora ho (...)
        if (strNumeri[parNumI[i]] == "(" && strNumeri[parNumI[i + 1]] == ")") {

            //rimuovo le parentesi per avere il contenuto
            contenutoPar = rimuoviPar(parRisolt, parNum[i], parNum[i + 1])

            //quando vado a sostituire il risultato di una parentesi la stringa sarà più corata, (1+1) è più lunga di 2,
            a = Number(parRisolt.substring(parNum[i], parNum[i + 1] + 1).length)//l. stringa rimossa

            //soluzione al interno della parentesi
            risultatoPar = traduci(contenutoPar + "=")

            //sostituisco la soluzione alla parentesi nella stringa
            parRisolt = parRisolt.substring(0, parNum[i]) + risultatoPar + parRisolt.substring((parNum[i + 1] + 1));

            //tengo conto dello spazio occupato dal risultato
            a -= Number(String(risultatoPar).length);

            //riduco gli indici, perché in parRisolt hanno cambiato posizione
            for (let j = i; j < parNum.length; j++) {

                parNum[j] = parNum[j] - a;

            }

            //rimuovo gli indici appena usati
            parNum.splice(i, 2);
            parNumI.splice(i, 2);

            //[0,1,2,3,4] se sono in 1 quando vado ad eliminare 1 e 2 rimango con [0,3,4] quindi se non torno indietro salo dei indici
            i != 0 ? i -= 2 : i -= 1;//torno indietro di due perchè se salto un elemento
        }
    }

    return traduci(parRisolt);//completa gli ultimi calcoli(non c'erano più parentesi)
}


function aggungiStr(str, d, s, agg) {//aggiunge un elemento tra gli indici d e s nella stringa str
    return str.substring(0, maxArrey(d)) + agg + str.substring(minArrey(s) + 1, str.length);
}
/*
    per arrivare alla parentesi più interna elimino un parentesi alla volta: (b(a)d) -> b(a)d
*/
function rimuoviPar(str, d, s) {//serve per rimuovere le parentesi alle estremità
    return str.substring(d + 1, s);
}

function maxArrey(arr) {//valora maggior in un array
    let i = arr.length
    let massimo = arr[0];
    while (i--) {
        if (arr[i] > massimo) {
            massimo = arr[i]
        }
    }
    return massimo;
}

function minArrey(arr) {//valore minore in un array
    let i = arr.length
    let minimo = arr[0];
    while (i--) {
        if (arr[i] < minimo) {
            minimo = arr[i]
        }
    }

    return minimo;
}



function traduci(istruzione) {

    let opp = [] //array di operazioni da eseguire
    let numeri = istruzione;//numeri per le operazioni
    let j = 0;

    for (let i of numeri) {//assegno un valore numerico agli simboli

        if (i == "π") {

            numeri = numeri.replace("π", "3.1")

        }
        if (i == "ⅇ") {

            numeri = numeri.replace("ⅇ", "2.7")

        }

    }

    for (let i of istruzione) {//leggo le operazioni da fare

        if (i == "E" || i == "+" || i == "-" || i == "x" || i == "÷" || i == "=") {

            opp[opp.length] = i;

            numeri = numeri.replace(i, "|");//sostituisco i operatori con il | per separare più facilmente i numeri

        }
    }


    numeri = numeri.split("|");//separo i numeri in un array
    numeri.pop()//l'ultimo elemento rimaneva vuoto perché levavo | in corrispondenza del uguale (1|2|)


    /*
        faccio il controllo del doppio simbolo
    */
    for (let i = 0; i < numeri.length; i++) {

        if (numeri[i] == "") {//ogni numero ha un operatora davanti ma se ci sono più operatori allora si crea uno spazio vuoto in numeri
            numeri.splice(i, 1)

            // qui controllo i casi ++ +- -+ o --
            if (opp[i] == "+" && (opp[i - 1] == "-" || opp[i - 1] == "+")) {

                if (opp[i - 1] == "+") {

                    opp.splice(i, 1)

                } else {

                    opp.splice(i, 1)

                }

            } else if (opp[i] == "-" && (opp[i - 1] == "-" || opp[i - 1] == "+")) {

                if (opp[i - 1] == "+") {

                    opp.splice((i - 1), 1)

                } else {

                    opp[i] = "+"

                    opp.splice((i - 1), 1)

                }

            } else {//ogni combinazione di simboli che non sia una di quelle sopra da errore
                alert("Sintassi errata! Non è possibil usare combinazioni dei seguenti elementi: E, x , ÷,^")
                break;
            }

        }

    }
    return calcolo(numeri, opp);

}

//con la funzione calcola svolgo le operazioni indicate con o sugli numeri n

function calcolo(n, o) {
    let risultato = 0;


    //esponenziale
    for (let i = 0; i < o.length - 1; i++) {
        if (o[i] == "E") {
            n[i] = n[i] * Math.pow(10, n[i + 1])
            n.splice((i + 1), 1)
            o.splice(i, 1)
        }
    }

    //elevamento a potenza
    for (let i of n) {

        for (let j = 0; j < i.length; j++) {

            if (i[j] == "^") {

                let _p = i.substring(0, j);

                let _d = i.substring(j + 1, i.length)

                let t = Math.pow(_p, _d)

                n[n.indexOf(i)] = t;

            }

        }

    }

    //moltiplicazione e divisione
    for (let i = 0; i < o.length - 1; i++) {

        if (o[i] == "x" || o[i] == "÷") {

            if (o[i] == "x") {

                n[i] = n[i] * n[i + 1];//si moltiplica o divide sempre con il successivo

                n.splice((i + 1), 1);

                o.splice(i, 1);

                if (o[i] == "x" || o[i] == "÷") i--; //mi serve altrimenti se la m o la d sono dispari(2*2*2) veniva fatto 2*2 e restituito un array [4,"2"]
            } else {

                n[i] = n[i] / n[i + 1];

                n.splice((i + 1), 1)

                o.splice(i, 1)

                if (o[i] == "x" || o[i] == "÷") i--;

            }
        }

    }

    //somma e sottrazione
    for (let i = 0; i < o.length - 1; i++) {

        if (o[i] == "+" || o[i] == "-") {

            if (i == 0) {//serve per inizializzare un risultato

                risultato = o[i] == "+" ? Number(n[i]) + Number(n[i + 1]) : n[i] - n[i + 1];

            } else {

                o[i] == "+" ? risultato += Number(n[i + 1]) : risultato -= n[i + 1];

            }
        }
    }
    if (o == "=") risultato = n;//se ho solo moltiplicazioni o divisioni il risultato rimaneva zero visto che ho scelto di dargli come valore di default 0, tutte le operazioni sono comunque salvate in n e quando l'operazione viene eseguita viene anche eliminata(solo * e /)

    console.log("Rtot=" + risultato)
    return risultato;
}