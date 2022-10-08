'use strict';
let randomNumber = (Math.floor(Math.random() * 100) + 1);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function playerValue() {
    let userNumber = prompt("Угадай число от 1 до 100");
    if (userNumber === null) {
        return alert("Игра окончена");
    } else {
        return game();
    }

    function game() {
        if (userNumber < randomNumber) {
            alert("Загаданное число больше, введите другое значение:");
            return playerValue();
        } else if (userNumber > randomNumber) {
            alert("Загаданное число меньше, введите другое значение:");
            return playerValue();

        } else if (!isNumber(userNumber)) {
            alert("Введи число!");
            return playerValue();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }
}
playerValue();