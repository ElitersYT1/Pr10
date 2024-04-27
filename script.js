console.log("я загадал число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemts = 3 

while (attemts > 0) {
    let userNumber = Number(prompt(' Введите число:'));
    if (userNumber < secretNumber ) {
        console.log('секретное число больше');
        attemts = attemts - 1;
    } else if (userNumber === secretNumber) {
        console.log ('Вы угадали!');
        break;
    } 
    else {
        console.log ('серкетное число меньше');
        attemts = attemts -1;
    }
}

if (attemts === 0) {
    console.log('вы проиграли');
} else {
    console.log('победа!');
} 
