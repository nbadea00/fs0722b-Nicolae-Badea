export class Prodotto {
    constructor(id, codprod, quantita, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo, src) {
        this.id = id;
        this.codprod = codprod;
        this.quantita = quantita;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.src = src;
    }
    getSaldoCapo() {
        return this.saldo / 100 * this.prezzoivaesclusa;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
