'use strict';

let randomNumber;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function one(randomNumber) {
    randomNumber = (Math.floor(Math.random() * 100) + 1);

    function two() {
        let userNumber = prompt("Угадай число от 1 до 100");

        if (userNumber === null) {
            alert("Игра окончена");
        } else if (!isNumber(+userNumber)) {
            alert("Введи число!");
        } else if (+userNumber < randomNumber) {
            alert("Загаданное число больше, введите другое значение:");
        } else if (+userNumber > randomNumber) {
            alert("Загаданное число меньше, введите другое значение:");
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
        two();
    }
    two();
}
one();
