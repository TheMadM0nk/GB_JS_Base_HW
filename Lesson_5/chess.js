var table = document.createElement('table'), td, tr;

var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
var diggits = ['', '8', '7', '6', '5', '4', '3', '2', '1', ''];

var blackBIg = ['', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', ''];
var blackSmall = ['', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', ''];

var whiteBig = ['', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', ''];
var whiteSmall = ['', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', ''];

for (x = 1; x <= 10; x++) {
    tr = document.createElement('tr');
    table.append(tr);

    for (y = 1; y <= 10; y++) {
        td = document.createElement('td');
        tr.append(td);

        if (x % 2 != y % 2) {
            td.classList.add('darkCell');
        } else {
            td.classList.add('whiteCell');
        }

        if ((x == 1 || x == 10) || (y == 1 || y == 10)) {
            td.classList.add('clear');
        }

        if ((x == 2) || (x == 3)) {
            td.innerHTML = '<h1>' + blackBIg[y - 1] + '</h1>';
            td.classList.add('upSide');

            if (x == 3) {
                td.innerHTML = '<h1>' + blackSmall[y - 1] + '</h1>';
            }
        }

        if (x == 1 || x == 10) {
            td.innerHTML = letters[y - 1];
            if (x == 1) {
                td.classList.add('upSide');
            }
        }

        if (x == 9) {
            td.innerHTML = '<h1>' + whiteBig[y - 1] + '</h1>';
        }

        if (x == 8) {
            td.innerHTML = '<h1>' + whiteSmall[y - 1] + '</h1>';
        }

        if (y == 1 || y == 10) {
            td.innerHTML = diggits[x - 1];

            if (y == 10) {
                td.classList.add('upSide');
            } else {
                td.classList.remove('upSide');
            }
        }
    }
}

document.getElementById('chessBoard').append(table);