var numPlayer1 = 38;
var numPlayer2 = 56;
function play(num1, num2) {
    var num = Math.ceil(Math.random() * 100);
    return (num1 === num2) ? 'Pareggio'
        : (num1 === num) ? "Il giocatore 1 ha indivinato(numero random = ".concat(num, ")")
            : (num2 === num) ? "Il giocatore 2 ha indivinato(numero random = ".concat(num, ")")
                : (Math.abs(num1 - num) > Math.abs(num2 - num)) ? "Il numero random \u00E8 ".concat(num, ", si \u00E8 avicianto di pi\u00F9 il giocatore 2(").concat(num2, ")")
                    : "Il numero random \u00E8 ".concat(num, ", si \u00E8 avicianto di pi\u00F9 il giocatore 1(").concat(num1, ")");
}
console.log(play(numPlayer1, numPlayer2));
