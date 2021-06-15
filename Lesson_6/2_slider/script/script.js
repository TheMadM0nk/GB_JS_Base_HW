
var imgBox = document.getElementsByClassName('img');
var dots = document.getElementsByClassName('dot');
var prevBtn = document.getElementById('btnPrev');
var nextBtn = document.getElementById('btnNext');

var onScreen = 0;

function setActive(x) {
    for (var img of imgBox) {
        img.classList.remove('active');
    }

    imgBox[x].classList.add('active');

    for (var dot of dots) {
        dot.classList.remove('activeDot');
    }

    dots[x].classList.add('activeDot');
};

function switchPrev() {
    if (onScreen == 0) {
        onScreen = imgBox.length - 1;
        setActive(onScreen);
    } else {
        onScreen--;
        setActive(onScreen);
    }
}

function switchNext() {
    if (onScreen == imgBox.length - 1) {
        onScreen = 0;
        setActive(onScreen);
    } else {
        onScreen++;
        setActive(onScreen);
    }
}

prevBtn.addEventListener('click', switchPrev);
nextBtn.addEventListener('click', switchNext);

var dot = [];
for (var i = 0; i < dots.length; i++) {
    dot.push(dots[i]);
    dots[i].addEventListener('click', function (e) {
        onScreen = dot.indexOf(e.target);
        setActive(onScreen);
    });
}
