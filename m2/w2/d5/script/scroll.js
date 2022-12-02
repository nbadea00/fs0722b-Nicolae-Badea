{
    let slider = document.querySelector('.slid');//richiamo il contenitore delle testimonianze

    for (let i = 0; i < slider.children.length; i++)//for mer ciclare le tre slide
        slider.children[i].addEventListener('click', function () {
            let posX = window.event.clientX;//posizione del maus x
            let whith = window.innerWidth;//larghezza delle paggina
            let cardVal = this.classList.value;//una stinga formata dalle classi delle singole sliid(in questo caso solo slid-n dove n è 1, 2 0 3)
            let numCard = cardVal[cardVal.length - 1];//ricava n

            if (posX > whith / 2) {//se al click il mause è dopo la meta dello schermo
                if (numCard === '3') {//se siamo al lutima ti porta alla prima che ha left = 0%
                    numCard = 0;
                }
                newPosX = -100 * Number(numCard);
            } else {//se al click il mause è prima la meta dello schermo
                if (numCard === '1') {//se sei alla prima ti porta al ultima he ha left = -200%
                    numCard = 4;
                }
                newPosX = - 100 * Number(numCard-2);
            }
            slider.style.left = newPosX + '%'
        })
}