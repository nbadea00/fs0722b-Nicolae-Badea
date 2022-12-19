let numPlayer1:number = 38;
let numPlayer2:number = 56;

function play(num1, num2):string {
    let num:number = Math.ceil(Math.random() * 100);

    return ( num1 === num2 ) ? 'Pareggio' 
    : ( num1 === num)? `Il giocatore 1 ha indivinato(numero random = ${num})` 
    : (num2 === num)? `Il giocatore 2 ha indivinato(numero random = ${num})` 
    : (Math.abs(num1 - num) > Math.abs(num2 - num))? `Il numero random è ${num}, si è avicianto di più il giocatore 2(${num2})` 
    : `Il numero random è ${num}, si è avicianto di più il giocatore 1(${num1})`;
}

console.log(play(numPlayer1, numPlayer2));