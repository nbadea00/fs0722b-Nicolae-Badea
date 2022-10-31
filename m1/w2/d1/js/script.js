function singUp(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var pass_prova = document.getElementById("pass-prova").value;

    

    if( pass != pass_prova){
        alert("Hai sbagliato ha reinserire la password!")
        location.href = "singup.html";
    }
    else{
        location.href = "home.html";
    }
}

function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var utenti = 
    [ 
        {user : "Nicolae" , password : "1111"},
        {user : "Mario" , password : "2222"},
        {user : "Giulio" , password : "3333"},
        {user : "Francesca" , password : "4444"},
        {user : "Giulia" , password : "5555"},
    ];

    var ind = 0;


    do{
        console.log(ind)
        console.log(utenti[ind].user)

        if(user == utenti[ind].user){
            if(pass == utenti[ind].password){
                location.href= "home.html"
                break;
            }
        }

        ind++;
        
        if(ind == utenti.length){
            alert("Non risulta nessun utente con questo user e password, perfafore riprovi.")
            break;
        }
    }while(user != utenti[ind]);
}