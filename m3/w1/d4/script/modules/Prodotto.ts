import { IProdotto } from "../interface/interface";
export class Prodotto implements IProdotto{
    id:number;
    codprod:number;
    quantita:number;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo?:number;
    src:string;
    constructor(id:number,codprod:number,quantita:number,prezzoivainclusa:number,prezzoivaesclusa:number, disponibile:string,saldo:number,src:string){
        this.id = id;
        this.codprod = codprod;
        this.quantita = quantita;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.src = src;
    }

    getSaldoCapo():number {
        return this.saldo / 100 * this.prezzoivaesclusa;
    }

    getAcquistoCapo():number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}