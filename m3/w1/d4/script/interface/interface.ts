export interface IProdotto{
    id:number;
    codprod:number;
    quantita:number;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo?:number;
    src:string;
    getSaldoCapo():number;
    getAcquistoCapo():number;
}
export interface IAbbigliamenti extends IProdotto{
    collezione:string;
    capo:string;
    modello:number;
    colore:string;
}