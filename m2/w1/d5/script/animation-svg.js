{//Anima l'svg
    let svg = document.querySelectorAll('.text');
    let text = svg[0].children;

    setInterval(animazioneSvg, 50);

    function animazioneSvg() {//opacizza i g che contengono il carattere selezionato
        let num = Math.floor(Math.random() * text.length);
        if (text[num].style.opacity == '1') {
            text[num].style.opacity = '0';
        } else {
            text[num].style.opacity = '1';
        }

    }
}