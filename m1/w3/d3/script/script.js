
//creo un eventlistener (quando viene premuto il pulsante conferma esegue la funzione aggiungiTask)
let puls = document.querySelector("#puls");
puls.addEventListener(`click`,aggiungiTask);


function aggiungiTask(){

    let text = document.querySelector("#inser-input"); //seleziono il testo da inserire dal campo di input
    
    if( text.value != ""){//controlo che il campo di input non sia vuoto per poter procedere con la funzione
        let todo = document.querySelector("#todo"); //seleziono il div todo
        let span = document.createElement('span'); //creo un span
        let div = document.createElement('div'); //creo un div
        let delPuls = document.createElement('button'); //creo il pulsante per eliminare la task
        let icona =  document.createElement('i'); //creo l'icona

        span.innerText = text.value; //inserisco il testo nello span
        text.value = ""; //reseto il campo del input
        

        delPuls.classList.add(`del-puls`); //calsi per lo stile del pulsante delete
        icona.classList.add(`fas`,`fa-trash`); //icona di fontawesome
        div.classList.add(`box`);//classe con lo stile dei box
        
        
        delScript(delPuls, div);//aggiungo le funzioni js per il pulsante delete
        taskCompleta(span, div);//aggiungo le funzioni js per il div
        
        delPuls.append(icona);//icona nel pulsante delete
        div.append(span);//span in div
        div.append(delPuls);//pulsante delete nel div
        todo.append(div);//il div nel todo
    }
}

function delScript(puls,div){
    puls.addEventListener(`click`,function (){//evento del pulsante delete per eliminare il div che lo contiene
        let todo = document.querySelector("#todo");
        div.remove();
    })
}

function taskCompleta(str, div){//funzione per cambiare lo stile del div
    div.addEventListener(`click`, function (){
        if( div.style.backgroundColor != "lightgreen" ){//do la possibilità di spuntare le task già completate
            str.style.textDecoration = "line-through"; //sbarra la parola
            div.style.backgroundColor = "lightgreen";
        }else{
            str.style.textDecoration = "none";
            div.style.backgroundColor = "white";
        }
    })
}