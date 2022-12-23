interface ISmartphone {
    carica: number;
    numeroChiamate: number;
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
};
interface IUser extends ISmartphone {
    id: number;
    pin: number;
    name: string;
    bg: string;
    user: number
}
abstract class Smartphone {
    static getPin(obj: IUser[]):IUser{
        let pin = Number((<HTMLInputElement>document.getElementById('pin')).value);
        let ret: number = 0;

        obj.forEach(function (input) {

            if (input.pin == pin) {

                ret = obj.indexOf(input);
            }
        });
        return obj[ret];
    };
    static layout(utente: IUser):void {
        let schermo = (<HTMLDivElement>document.getElementById('schermo'));
      
        schermo.style.backgroundImage = ` url('${utente.bg}')`;
        schermo.innerHTML = ` <div class="container"> <h2> Ciao ${utente.name}! </h2> 
        <p> il tuo credito è ${(utente.carica).toFixed(2)} &euro;</p>
        <p> chiamate: ${utente.numeroChiamate} </p>
        <div id="carica"><input type="number"> <button> Ricarica </button> </div>
        <div id="chiama"><input type="number"> <button> Chiama </button>  </div>
        </div> `;
        Smartphone.bottone(utente)


    }
    static bottone(obj: IUser):void {

        let bottoneCarica: HTMLButtonElement | null = document.querySelector('#carica button');
        let bottoneChiama: HTMLButtonElement | null = document.querySelector('#chiama button');
        bottoneCarica?.addEventListener('click', (): void => {
            let inp = (<HTMLInputElement>document.querySelector('#carica input'));
            obj.ricarica(Number(inp.value));
            Smartphone.layout(obj)

        })
        bottoneChiama?.addEventListener('click', (): void => {
            let inp = (<HTMLInputElement>document.querySelector('#chiama input'));
            obj.chiamata(Number(inp.value));
            Smartphone.layout(obj)
        })
    }
};

class User implements ISmartphone {
    carica: number;
    numeroChiamate: number;
    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }
    chiamata(minutiDurata: number): void {
        this.numeroChiamate += 1
        this.carica -= Math.ceil(minutiDurata) * 0.20
    };
    numero404(): number {
        return this.carica
    };
    getNumeroChiamate(): number {
        return this.numeroChiamate
    };
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    };

}

class FirstUser extends User implements IUser {
    id: number;
    name: string;
    pin: number;
    bg: string;
    user: number;
    constructor(obj) {
        super(obj.credito,
            obj.chiamate);
        this.id = obj.id;
        this.name = obj.name;
        this.pin = obj.pin;
        this.bg = obj.bg;
        this.user = obj.user;
    }

}
class SecondUser extends User implements IUser {

    id: number;
    name: string;
    pin: number;
    bg: string;
    user: number;
    constructor(obj) {
        super(obj.credito,
            obj.chiamate);
        this.id = obj.id;
        this.name = obj.name;
        this.pin = obj.pin;
        this.bg = obj.bg;
        this.user = obj.user;
    }
}
class ThirdUser extends User implements IUser {

    id: number;
    name: string;
    pin: number;
    bg: string;
    user: number;
    constructor(obj) {
        super(obj.credito,
            obj.chiamate);
        this.id = obj.id;
        this.name = obj.name;
        this.pin = obj.pin;
        this.bg = obj.bg;
        this.user = obj.user;
    }
}

fetch('utenti.json').then(function (result) {

    return result.json()
}).then(function (data) {

    let controllo = (<HTMLButtonElement>document.getElementById('entra'));
    controllo.addEventListener('click', () => {
        let us = (Smartphone.getPin(data.utenti));
        console.log(us)
        if (us.user == 1) {
            Smartphone.layout(new FirstUser(us))
        } else if (us.user == 2) {
            Smartphone.layout(new SecondUser(us))
        } else if (us.user == 3) {
            Smartphone.layout(new ThirdUser(us))
        }

    })


});


