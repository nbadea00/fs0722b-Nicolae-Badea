interface IWorkers {
    codredd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    getUtileTasse(): number;
    getTasseInps(): number;
    getTasseIrpef():number;
    getRedditoAnnuoNetto(): number;
}

abstract class Tax {
    tasseInps: number;
    tasseIrpef: number;
    codredd:number;
    redditoAnnuoLordo: number;
    constructor(tasseInps:number,tasseIrpef: number){
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getTasseInps(): number {
        console.log(this.redditoAnnuoLordo, this.codredd, this.tasseInps);
        return this.redditoAnnuoLordo * this.codredd * this.tasseInps / 100;
    }

    getTasseIrpef(): number {
        let a:number = this.redditoAnnuoLordo * this.codredd;
        let tas:number = 0;
        if( a > 50000){
            tas += (a - 50000 * Math.floor(a / 50000)) * 0.43;
            a = 50000;
            tas += (a - 28000 * Math.floor(a / 28000)) * 0.35;
            a = 28000;
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23
        }else if( a > 28000){
            tas += (a - 28000 * Math.floor(a / 28000)) * 0.35;
            a = 28000;
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23
        }else if( a > 15000){
            tas += (a - 15000 * Math.floor(a / 15000)) * 0.25;
            a = 15000;
            tas += a * 0.23
        }else{
            tas += a * 0.23
        }

        return tas;
    }

}

abstract class Workers extends Tax implements IWorkers {
    codredd: number;
    redditoAnnuoLordo: number;
    constructor(codredd: number, redditoAnnuoLordo: number,tasseInps:number, tasseIrpef:number) {
        super(tasseInps,tasseIrpef);
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    getUtileTasse(): number {
        return this.getTasseInps() + this.getTasseIrpef();
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    }
}

class Artigiano extends Workers{
    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef:number){
        super( 0.78 , redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
}

class Freelancer extends Workers{
    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef:number){
        super( 0.50 , redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
}

class Imprenditore extends Workers{
    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef:number){
        super( 0.63 , redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
}

let puls: NodeListOf<HTMLElement> = document.querySelectorAll("button");

puls[0].addEventListener("click",function():void{
    let boxRedd: HTMLInputElement | null = document.querySelector('#redd');
    let redd:number = Number(boxRedd.value);
    let boxTax: HTMLInputElement | null = document.querySelector('#tax');
    let tax:number = Number(boxTax.value);

    let worker: Artigiano = new Artigiano(redd, tax, 0);
    writeData(worker);
})

puls[1].addEventListener("click",function():void{
    let boxRedd: HTMLInputElement | null = document.querySelector('#redd');
    let redd:number = Number(boxRedd.value);
    let boxTax: HTMLInputElement | null = document.querySelector('#tax');
    let tax:number = Number(boxTax.value);

    let worker: Freelancer = new Freelancer(redd, tax, 0);
    writeData(worker);
})

puls[2].addEventListener("click",function():void{
    let boxRedd: HTMLInputElement | null = document.querySelector('#redd');
    let redd:number = Number(boxRedd.value);
    let boxTax: HTMLInputElement | null = document.querySelector('#tax');
    let tax:number = Number(boxTax.value);

    let worker: Imprenditore = new Imprenditore(redd, tax, 0);
    writeData(worker);
})

function writeData(obj:IWorkers):void {
    let div: HTMLElement = document.createElement('div');
    let cont: HTMLElement | null = document.querySelector('#risultati');
    cont.innerHTML = ''

    div.innerHTML = `<div>
    <p>Reddito netto:${obj.getRedditoAnnuoNetto()}</p>
    <p>Tasse utile:${obj.getUtileTasse()}</p>
    <p>Tasse inps:${obj.getTasseInps()}</p>
    <p>Tasse irpef:${obj.getTasseIrpef()}</p>
    <div>`;
    
    cont.append(div);
}