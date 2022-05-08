var textPannel = document.querySelector('.textPannel');
var button = document.querySelector('.control');
var _11 = document.getElementById('11');
var _12 = document.getElementById('12');
var _13 = document.getElementById('13');
var _21 = document.getElementById('21');
var _22 = document.getElementById('22');
var _23 = document.getElementById('23');
var _31 = document.getElementById('31');
var _32 = document.getElementById('32');
var _33 = document.getElementById('33');

let gameStatus = false;
let playerTurn = 'O' 
function startingGame() {
    if (button.textContent == "Restart") {
        gameStatus = false;
        _11.textContent = ""
        _12.textContent = ""
        _13.textContent = ""
        _21.textContent = ""
        _22.textContent = ""
        _23.textContent = ""
        _31.textContent = ""
        _32.textContent = ""
        _33.textContent = ""
        button.textContent = "Start";
        textPannel.textContent = "Click on start to play";
    }
        else {
            gameStatus = true;
            button.textContent = "Restart";
            textPannel.textContent = "Player 0 is playing first";
        }
}

function _11Clicked() {
    if (gameStatus == true && _11.textContent == "") {
        _11.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }

}

function _12Clicked() {
    if (gameStatus == true && _12.textContent == "") {
        _12.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _13Clicked() {
    if (gameStatus == true && _13.textContent == "") {
        _13.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _21Clicked() {
    if (gameStatus == true && _21.textContent == "") {
        _21.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _22Clicked() {
    if (gameStatus == true && _22.textContent == "") {
        _22.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _23Clicked() {
    if (gameStatus == true && _23.textContent == "") {
        _23.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _31Clicked() {
    if (gameStatus == true && _31.textContent == "") {
        _31.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _32Clicked() {
    if (gameStatus == true && _32.textContent == "") {
        _32.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}

function _33Clicked() {
    if (gameStatus == true && _33.textContent == "") {
        _33.textContent = playerTurn;
        if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
            else {
                playerTurn = 'O';
            }
        textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
    }
}