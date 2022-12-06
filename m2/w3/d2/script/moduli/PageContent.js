export class PageContent {
    constructor(_items, _pageSize) {
        this.items = _items;
        this.pageSize = _pageSize;
    }

    writeInTable(firstIndex) {// metodo per scrivere gli elementi nella tabella
        let tabelBody = document.querySelector('.table tbody');

        tabelBody.innerHTML = '';

        let j = 0;
        let n = 0;

        if (firstIndex < 0) {//quando abbiamo (1,2,...) oppure (n,1,2,...) firstIndex è negativo
            firstIndex = this.items.length  +  firstIndex;//se in tabella abbiamo 1,2,3 (this.pageSize = 3) allora se torniamo indietro firstIndex sara = -1, ma noi vorremo 8,1,2 quindi firstIndex dovrebbe essere 7 = this.items.length(8)- firstIndex(-1)
        }

        for (let i = firstIndex; i < firstIndex + this.pageSize; i++) {
            let tr = document.createElement('tr');
            
            if (i >= this.items.length) {// se i è >= di firstIndex + this.pageSize, quando entra nel if parte un altro contatore da 0 fino al numero di elementi rimanenti da inserire
                j = - i + n;
                n += 1;
            }

            tr.innerHTML = `<th scope="row">${this.items[i + j].id}</th>
            <td>${this.items[i + j].nome}</td>
            <td>${this.items[i + j].cognome}</td>
            <td>${this.items[i + j].classe}</td>`;//j è sempre 0 appmeno che i >= firstIndex + this.pageSize

            tabelBody.append(tr);
        }
    }

    indexLastElement() {//serve per prendere l'id del secondo elemento in tabella
        let idLastTableElement = document.querySelector('.table tbody').children;
        return Number(idLastTableElement[1].querySelector('th').textContent);
    }

    goFirst() {
        this.writeInTable(0);
    }

    goNext() {//this.indexLastElement()-1 indice nel array del secondo elemento nella tabelle
        this.writeInTable(this.indexLastElement() - 1);
    }

    goBefore() {
        this.writeInTable(this.indexLastElement() - 3 );// se ho [4,5,6] indce è 5 quindi nel array prendo l'elemento 5-3 = 2 quindi 3 e scrivo [3,4,5]
    }

    goLast() {
        this.writeInTable(this.items.length - this.pageSize);
    }
}