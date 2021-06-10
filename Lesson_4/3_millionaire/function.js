

var z = 0; // Счетчик

var go = true; //Переменная для работы Do While

//-------------

// Основная фунция запускающая игру

function runTheGame(question, answer) {

    do {


        askUser(question, answer);

        if (userAnswer == -1) {
            go = false;
        } else if (userAnswer < 0 || userAnswer > 4) {
            alert('Ввидите один из предложенных вариантов!');

        } else if (isNaN(userAnswer) || !isFinite(userAnswer)) {
            alert('Некорректный символ!');

        } else {

            switch (userAnswer) {
                case 1:

                    checkAnswer(answer[z][0]);

                    break;

                case 2:

                    checkAnswer(answer[z][1]);

                    break;

                case 3:

                    checkAnswer(answer[z][2]);

                    break;

                case 4:

                    checkAnswer(answer[z][3]);

                    break;

                case -1:
                    break;

                default:
                    go = false;
                    // alert('error');
                    break;
            };
        };


    } while (go);
};



//функция для перемешивания порядка вариантов ответов

function shuffle(answer) {

    for (var i = answer[z].length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = answer[z][i];
        answer[z][i] = answer[z][j];
        answer[z][j] = temp;
    }

    return answer;
};



// Функия ввывода вопроса, и получения ответа от игрока

function askUser(question, answer) {
    return userAnswer = +prompt('Вопрос № ' + (z + 1) + '\n' + question[z][0] + '\n\n' + 'Варианты ответа: ' + '\n\n1 - ' + answer[z][0] + '\n2 - ' + answer[z][1] + '\n3 - ' + answer[z][2] + '\n4 - ' + answer[z][3] + '\nДля выхода введите " -1 "');

};



// Функция проверки ответа игрока, и ввывода сообщений 

function checkAnswer(userAnswer) {

    if (userAnswer == question[z][1]) {
        alert('Поздравляю, ' + 'ваш выигрыш: ' + ((z + 1) * 100));
        z++;
        if (z < question.length) {
            shuffle(answer);
        } else {
            go = false;
        }
    } else {
        alert('Ответ не верный!');
    }
};

//Приветствие 
alert('Добро пожаловать! \n\nДля ответа на вопрос введите цифру \nрасроложенную рядом с вариантом ответа!')

// перемешиваем варианты ответов
shuffle(answer);

//запускаем игру
runTheGame(question, answer);

// Сообщение после окончания игры
alert('Спасибо за игру!');