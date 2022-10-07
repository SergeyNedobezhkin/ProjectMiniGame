'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function playerValue(userNumber, randomNumber) {
    randomNumber = (Math.floor(Math.random() * 100) + 1);
    userNumber = +prompt("Угадай число от 1 до 100");

    if (userNumber !== 0) {
        return game();
    } else {
        alert("Игра окончена");
        return playerValue();
    }

    function game() {
        if (userNumber < randomNumber) {
            alert("Загаданное число больше, введите другое значение:");
            return playerValue();
        } else if (userNumber > randomNumber) {
            alert("Загаданное число меньше, введите другое значение:");
            return playerValue();
        } else if (userNumber === randomNumber) {
            alert("Поздравляю, Вы угадали!!!");
            return playerValue();
        } else if (!isNumber(userNumber)) {
            alert("Введи число!");
            return playerValue();
        }
    }
}
playerValue();
