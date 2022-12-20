abstract class Account {
    balancInit: number;
    accountUsername: string;
    accountEmail: string;
    accountPassword: string;
    date: Date;
    interest: number;

    constructor(accountUsername:string, accountEmail:string, accountPassword:string, balancInit:number, date:string, interest:number) {
        this.accountUsername = accountUsername;
        this.accountEmail = accountEmail;
        this.accountPassword = accountPassword;
        this.balancInit = balancInit;
        this.date = new Date(date);
        this.interest = interest;
    }

    oneDeposit(deposit:number): number {
        return this.balancInit += deposit;
    }

    oneWithDraw(draw:number): number | string {
        return (this.balancInit >= draw) ? this.balancInit-=draw : 0;
    }

    creationCard():void{
        let div: HTMLElement = document.createElement('div');
        let accountSection: HTMLElement = document.querySelector('#account-section') as HTMLElement;
    
        div.innerHTML = `<h3>${this.accountUsername}</h3>
        <p>${this.accountEmail}</p>`;

        Account.extendedCard(div, this)
    
        accountSection.append(div);
    }

    static extendedCard(cont: HTMLElement, obj: MotherAccount | SonAccount):void{

        cont.addEventListener("click",function(){
            let accountSection: HTMLElement = document.querySelector('#account-section') as HTMLElement;
            accountSection.innerHTML = '';

            let div: HTMLElement = document.createElement('div');

            div.innerHTML = `<div><h3>${obj.accountUsername}</h3>
            <p>${obj.accountEmail}</p>
            <p>${obj.balancInit} $</p>
            <p>${obj.date}</p></div>
            <div><button class="deposita">Deposita 100$</button><button class="ritira">Ritira 100$</button></div>`;


            accountSection.append(div);
            Account.acctiveButton(obj);
        }) 
    }

    static acctiveButton(obj: MotherAccount | SonAccount):void{
        let puls = document.querySelectorAll("button");
        
        puls[0].addEventListener("click",function(){
            console.log("Il saldo è",obj.oneDeposit(100));
        })

        puls[1].addEventListener("click",function(){
           console.log( (obj.oneWithDraw(100))? `Il saldo è ${obj.balancInit}.`: 'Non puoi più ritirare.');
        })
    }
}

class MotherAccount extends Account {
    constructor(accountUsername:string, accountEmail:string, accountPassword:string, balancInit:number,date:string, interest:number){
        super(accountUsername, accountEmail, accountPassword, balancInit, date, interest);
    }

    addInterest(){
        return this.balancInit + this.balancInit * this.interest / 100
    }
}

class SonAccount extends Account {
    constructor(accountUsername:string, accountEmail:string, accountPassword:string, balancInit:number,date:string){
        super(accountUsername, accountEmail, accountPassword, balancInit, date, 0);
    }
}





let mAccount: MotherAccount =  new MotherAccount('maria', 'maria.rossi@gmail.com', '1234', 500, '01/01/2022', 10);
let sAccount: SonAccount = new SonAccount('marco', 'marco.rossi@gmail.com', '1234', 100, '01/01/2022');

let users: Account[] = [mAccount, sAccount];

console.log("Valore interesse ",mAccount.addInterest()); 

window.onload = () => {
    users.forEach(user => user.creationCard())
}