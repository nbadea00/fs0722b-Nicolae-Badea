{//nasconde le tab
    let puls = document.querySelectorAll('.nascondi');

    for (let i of puls) {
        i.addEventListener('click', function () {
            let elemento = i.parentElement.nextElementSibling;
            let trov = false;

            for (let j = 0; j < elemento.classList.length; j++) {
                if (elemento.classList[j] == 'd-none') {
                    trov = true;
                }
            }

            if (trov) {
                elemento.classList.remove('d-none');
            } else {
                elemento.classList.add('d-none');
            }
        })
    }
}

{//form
    let pulsante = document.querySelector('#contattaci');
    pulsante.addEventListener('click', function () {
        let elemento = document.querySelector('.messaggio');
        let trov = false;

        for (let j = 0; j < elemento.classList.length; j++) {
            if (elemento.classList[j] == 'd-none') {
                trov = true;
            }
        }

        if (trov) {
            elemento.classList.remove('d-none');
        } else {
            elemento.classList.add('d-none');
        }
    });
}

{
    let card = document.querySelectorAll('.card');
    let pulsante = document.querySelector("#elimina");
    pulsante.addEventListener('click', function () {
        for (let i of card) {
            i.remove();
        }
    })
}
