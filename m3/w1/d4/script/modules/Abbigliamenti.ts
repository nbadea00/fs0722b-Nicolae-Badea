import { IAbbigliamenti } from "../interface/interface";
import { Prodotto } from "./Prodotto.js";
export class Abbigliamenti extends Prodotto implements IAbbigliamenti{
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo?:number;
    src:string;

    constructor(obj: IAbbigliamenti){
        super(obj.id, obj.codprod, obj.quantita, obj.prezzoivainclusa, obj.prezzoivaesclusa, obj.disponibile, obj.saldo, obj.src)
        this.capo = obj.capo;
        this.modello = obj.modello;
        this.quantita = obj.quantita;
        this.colore = obj.colore;
    }

    getSaldoCapo():number {
        return this.saldo / 100 * this.prezzoivaesclusa;
    }

    getAcquistoCapo():number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}