import { Prodotto } from "./Prodotto.js";
export class Abbigliamenti extends Prodotto {
    constructor(obj) {
        super(obj.id, obj.codprod, obj.quantita, obj.prezzoivainclusa, obj.prezzoivaesclusa, obj.disponibile, obj.saldo, obj.src);
        this.capo = obj.capo;
        this.modello = obj.modello;
        this.quantita = obj.quantita;
        this.colore = obj.colore;
    }
    getSaldoCapo() {
        return this.saldo / 100 * this.prezzoivaesclusa;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
