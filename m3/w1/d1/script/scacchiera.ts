function createScacchiera(): void {
    let scacchiera: HTMLElement | null = document.querySelector('#scacchiera');

    for (let i: number = 0; i < 9; i += 1) {
        let div = document.createElement('div');
        scacchiera.append(div);
    }
    setPropAttribute();
}

function setPropAttribute(): void {
    //let numberBlock:number = Math.floor(Math.random()*9);
    let div = document.querySelectorAll('#scacchiera div');

    for (let i: number = 0; i < div.length; i++) {
        div[i].setAttribute('style', `background-color: ${randomColor()}; ${randomPosizion()}; ${randomBorderRadius()}`);
    }
}

function randomColor(): string {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function randomPosizion(): string {
    return `top:${Math.floor(Math.random() * 500 - 250)}px; left:${Math.floor(Math.random() * 1000 - 500)}px`;
}

function randomBorderRadius(): string {
    return `border-radius:${Math.floor(Math.random() * 51)}%`;
}

createScacchiera();
setInterval(setPropAttribute, 5000);