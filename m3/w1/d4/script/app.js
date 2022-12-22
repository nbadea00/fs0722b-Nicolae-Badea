import { Abbigliamenti } from "./modules/Abbigliamenti.js";
import { Card } from "./modules/Card.js";
let url = '../assets/json/Abbigliamento.json';
fetch(url)
    .then((response) => {
    if (!response.ok) {
        throw response.status;
    }
    return response.json();
})
    .then((data) => {
    for (let i of data) {
        let cont = document.querySelector('#articoli');
        cont.style.display = 'flex';
        Card.createCard(cont, new Abbigliamenti(i));
    }
    let cartNum = document.querySelector('#num-prodotti');
    cartNum.textContent = `[${JSON.parse(localStorage.getItem('cart')).length}]`;
})
    .catch((error) => console.log(error));
document.querySelector('header img').addEventListener('click', () => window.location.reload());
let menuCart = document.querySelector('#cart');
menuCart.addEventListener('click', () => {
    let sec = document.querySelectorAll('section.container');
    let container = document.querySelector('#carello');
    sec[0].classList.add('d-none');
    sec[1].classList.remove('d-none');
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cont = document.querySelector('#carello');
    cont.innerHTML = '';
    for (let i of cart) {
        Card.addToCart(container, i);
    }
});
let pulsCart = document.querySelector('#acquisto');
pulsCart.addEventListener('click', () => {
    let numInput = document.querySelectorAll('span input');
    let spesa = document.querySelector('#spesa');
    let listArt = JSON.parse(localStorage.getItem('cart'));
    listArt = listArt.map((item) => item = new Abbigliamenti(item));
    let summScont = 0;
    let summNoScont = 0;
    for (let i = 0; i < listArt.length; i += 1) {
        summScont += listArt[i].prezzoivainclusa * (1 - listArt[i].saldo / 100) * Number(numInput[i].value);
        summNoScont += listArt[i].prezzoivainclusa * Number(numInput[i].value);
    }
    spesa.style.display = 'block';
    spesa.innerHTML =
        `<div class="text-center">
        <h2>Spesa</h2>
        <p class="m-0">Totale senza sconto: ${summNoScont.toFixed(2)}&euro;</p>
        <p class="m-0">Totale con sconto: ${summScont.toFixed(2)}&euro;</p>
        <button type="button" class="btn btn-success">Procedi</button>
    </div>`;
    spesa.querySelector('button').addEventListener('click', () => {
        spesa.innerHTML = '';
        spesa.style.display = 'none';
        localStorage.setItem('cart', JSON.stringify([]));
        window.location.reload();
    });
});
