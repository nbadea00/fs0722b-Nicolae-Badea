export class Card {
    static createCard(cont, obj) {
        let div = document.createElement('div');
        div.classList.add('col-3', 'py-2');
        div.innerHTML =
            `<div class="card">
            <img src="${obj.src}" class="card-img-top" alt="immagine ${obj.capo}">
            <div class="card-img-overlay text-end">
                <span class="bg-danger rounded px-3 py-2 text-white">Sconto: ${obj.saldo} &percnt;</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${obj.capo} ${obj.colore}</h5>
                <p class="card-text">Quantità: ${obj.quantita} Prezzo: ${obj.prezzoivaesclusa}&euro;</p>
                <a href="#" class="btn btn-primary">Aggiungi al carello</a>
            </div>
        </div>`;
        Card.addToLocal(div, obj);
        cont.append(div);
    }
    static addToCart(container, obj) {
        let cont = document.querySelector('#carello');
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${obj.src}" class="img-fluid rounded-start" alt="immagine ${obj.capo}">
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tipologia capo: ${obj.capo}</h5>
                        <p class="card-text">Colore: ${obj.colore}</p>
                        <p class="card-text">Collezione: ${obj.collezione}</p>
                        <p class="card-text">Quantità: ${obj.quantita}</p>
                        <p class="card-text">Prezzò: ${obj.prezzoivaesclusa}&euro; (${obj.saldo}&percnt; sconto)</p>
                        <p class="card-text">Disponibilità: ${obj.disponibile}</p>
                        <button type="button" class="btn btn-warning rimuovi">Rimuovi</button>
                        <span>Quantità: <input value="1" type="number"></span>
                    </div>
              </div>
            </div>`;
        cont.append(div);
        Card.removeButton(div, container, obj);
    }
    static removeButton(card, container, obj) {
        let puls = card.querySelector('.rimuovi');
        puls.addEventListener('click', () => {
            card.remove();
            Card.removeFromLocal(obj, container);
        });
    }
    static addToLocal(container, obj) {
        container.addEventListener('click', () => {
            if (localStorage.getItem('cart')) {
                let cart = JSON.parse(localStorage.getItem('cart'));
                let cont = document.querySelector('#carello');
                cont.innerHTML = '';
                cart.push(obj);
                let cartNum = document.querySelector('#num-prodotti');
                cartNum.textContent = `[${cart.length}]`;
                for (let i of cart) {
                    Card.addToCart(container, i);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                localStorage.setItem('cart', JSON.stringify([obj]));
                Card.addToCart(container, obj);
            }
        });
    }
    static removeFromLocal(obj, container) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.splice(cart.indexOf(obj), 1);
        let cartNum = document.querySelector('#num-prodotti');
        cartNum.textContent = `[${cart.length}]`;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
