function createScacchiera() {
    var scacchiera = document.querySelector('#scacchiera');
    for (var i = 0; i < 9; i += 1) {
        var div = document.createElement('div');
        scacchiera.append(div);
    }
    setPropAttribute();
}
function setPropAttribute() {
    //let numberBlock:number = Math.floor(Math.random()*9);
    var div = document.querySelectorAll('#scacchiera div');
    for (var i = 0; i < div.length; i++) {
        div[i].setAttribute('style', "background-color: ".concat(randomColor(), "; ").concat(randomPosizion(), "; ").concat(randomBorderRadius()));
    }
}
function randomColor() {
    return "rgb(".concat(Math.floor(Math.random() * 256), ",").concat(Math.floor(Math.random() * 256), ",").concat(Math.floor(Math.random() * 256), ")");
}
function randomPosizion() {
    return "top:".concat(Math.floor(Math.random() * 500 - 250), "px; left:").concat(Math.floor(Math.random() * 1000 - 500), "px");
}
function randomBorderRadius() {
    return "border-radius:".concat(Math.floor(Math.random() * 51), "%");
}
createScacchiera();
setInterval(setPropAttribute, 5000);
