
var screen = document.getElementById('screen');
var btnList = document.getElementsByClassName('imgBtn');


for (var i = 0; i < 3; i++) {

    btnList[i].onclick = function (e) {

        var screenImg = document.getElementById('screenImg');

        if (screenImg == null) {
        } else {
            screenImg.remove();
        }

        var img = document.createElement('img');
        img.src = 'img/big/' + e.target.id + '.jpeg';
        img.alt = 'poster';
        img.id = 'screenImg';

        screen.append(img);

        document.getElementById('screenImg').addEventListener('error', myFunction);

        function myFunction() {
            alert('Невозможно загрузить изображение!');
        }
    }
};

screen.onclick = function screenRemove() {
    var screenImg = document.getElementById('screenImg');
    if (screenImg == null) {
    } else {
        screenImg.remove();
    }
};