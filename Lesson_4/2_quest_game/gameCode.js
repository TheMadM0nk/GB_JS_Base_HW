//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа



// Функция проверки ввода

function isAnswer(q, userInput) {
    if (isNaN(userInput) || !isFinite(userInput)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (userInput < 1 || userInput > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

};


// Функция для заполнения массива в случае выхода

function exitLog(a, b) {
    return userAnswersLog[x] = { question: a, answer: b };
}


// Основная функция для обработки информации

function runQuestion(question, answer1, answer2, counter, extra) {
    do {
        ok = false;
        userInput = +prompt(question + answer1 + answer2 + extra);

        if (userInput == -1) {
            break;

        } else {
            ok = isAnswer(counter, userInput);
            if (userInput === 1) {
                userAnswersLog.push({ question: question, answer: answer1 });
                x++;

            } else if (userInput === 2) {
                userAnswersLog.push({ question: question, answer: answer2 });
                x++;
            }
        }

    } while (!ok);
};



//-----------Переменные-----------------

var userInput, ok;

var exit = '-1 - Выход из игры';
var bruce = 'После крика кия, и удара ноги, \nChuck Norris сбежал... \nПодпись: \n                    Bruce Lee.';
var chuck = 'От Чака еще ни кто так просто не уходил!!! \nCчитай что тебе повезло!';

var userAnswersLog = [];
var x = 0;  // Счетчик отвеченных вопросов


// Запуск и исполнение кода игры

runQuestion(works.a00, works.a1, works.a2, works.a0, exit);

switch (userInput) {
    case 1:
        runQuestion(works.b00, works.b1, works.b2, works.b0, exit);

        switch (userInput) {
            case 1:
            case 2:
                runQuestion(works.d00, works.d1, works.d2, works.d0, works.d3);

                switch (userInput) {
                    case 1:
                        alert('Надо было звонить Bruce Lee!');
                        break;

                    case 2:
                        alert(bruce);
                        break;

                    case -1:
                        alert(chuck);
                        exitLog(works.d00, works.d4);
                        x++;
                        break;
                }
                break;

            case -1:
                exitLog(works.b00, exit);
                x++;
                break;

            default:
                alert('Ошибка');
        }
        break;

    case 2:
        runQuestion(works.c00, works.c1, works.c2, works.c0, exit);

        switch (userInput) {
            case 1:
            case 2:
                runQuestion(works.d00, works.d1, works.d2, works.d0, works.d3);

                switch (userInput) {
                    case 1:
                        alert('Надо было звонить Bruce Lee!');
                        break;

                    case 2:
                        alert(bruce);
                        break;

                    case -1:
                        alert(chuck);
                        exitLog(works.d00, works.d4);
                        x++;
                        break;
                }
                break;

            case -1:
                exitLog(works.c00, exit);
                x++;
                break;

            default:
                alert('Ошибка');
        }
        break;

    case -1:
        exitLog(works.a00, exit);
        x++;
        break;

    default:
        alert('Ошибка');
}


alert('Спасибо за игру');


// Выводим в консоль содержание массива и запрашиваем у пользователя интересующий его вопрос

console.log(userAnswersLog);

do {
    var number = +prompt('Введите номер интересующего вас вопроса:');
    ok = isAnswer(x, number);

    if (ok == true) {
        alert('Номер запрашиваемого вопроса: ' + x + '\n\nСодержимое: \n' + userAnswersLog[number - 1].question + '\nДанный вами ответ:\n' + userAnswersLog[number - 1].answer);
        console.log('Номер запрашиваемого вопроса: ' + x + '\n\nСодержимое: \n' + userAnswersLog[number - 1].question + '\nДанный вами ответ:\n' + userAnswersLog[number - 1].answer);
    }

} while (!ok);

