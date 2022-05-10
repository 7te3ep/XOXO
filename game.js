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
let playerTurn = 'O' ;
let numberOfTurns = 0;
let darkMod = false;

function victoryCheck() {
    if (_12.textContent == playerTurn && _11.textContent == _12.textContent && _13.textContent == _12.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }    
    if (_21.textContent == playerTurn && _11.textContent == _21.textContent && _31.textContent == _21.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }    
    if (_32.textContent == playerTurn && _31.textContent == _32.textContent && _33.textContent == _32.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }  
    if (_23.textContent == playerTurn && _13.textContent == _23.textContent && _33.textContent == _23.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }    
    if (_22.textContent == playerTurn && _21.textContent == _22.textContent && _23.textContent == _22.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }  
    if (_22.textContent == playerTurn && _12.textContent == _22.textContent && _32.textContent == _22.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    }   
    if (_22.textContent == playerTurn && _13.textContent == _22.textContent && _31.textContent == _22.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;
    } 
    if (_22.textContent == playerTurn && _11.textContent == _22.textContent && _33.textContent == _22.textContent) {
        textPannel.textContent = 'Player ' + playerTurn +' Win !';
        gameStatus = false;}
    if (numberOfTurns == 9) {
        textPannel.textContent = 'Egality !!!';
        gameStatus = false;}
}

function startingGame() {
    if (button.textContent == "Restart") {
        gameStatus = false;
        _11.textContent = "";
        _12.textContent = "";
        _13.textContent = "";
        _21.textContent = "";
        _22.textContent = "";
        _23.textContent = "";
        _31.textContent = "";
        _32.textContent = "";
        _33.textContent = "";
        button.textContent = "Start";
        textPannel.textContent = "Click on start to play";
    }
        else {
            gameStatus = true;
            numberOfTurns =0;
            button.textContent = "Restart";
            textPannel.textContent = "Player 0 is playing first";
        }
}
function squareClicked(square) {
    if (gameStatus == true && square.textContent == "") {
        square.textContent = playerTurn;
        numberOfTurns = numberOfTurns + 1;
        victoryCheck()
        if(gameStatus==true){
            if (playerTurn == 'O' ) {
            playerTurn = 'X';
        }
                else {
                    playerTurn = 'O';
            }
            textPannel.textContent = 'Player ' +playerTurn+ ' is playing'
        }
        
    }
}

function toggleDarkMod() {
    if (darkMod == false) {
        darkMod = true;
        document.querySelector('.game').style.backgroundColor = '#555';
        document.querySelector('nav').style.backgroundColor = '#333';
        document.querySelector('.siteName').style.color = 'white';
        document.querySelector('.textPannel').style.backgroundColor = 'rgb(14, 82, 105)';
        document.querySelector('.textPannel').style.color = 'white';
        document.querySelector('.control').style.backgroundColor = 'rgb(77, 126, 77)';
        document.querySelector('.control').style.color = 'white';
        document.querySelector('.toggleMod').style.color = 'white';
        document.querySelector('.switchButton').style.alignItems = 'flex-end';
        document.querySelector('.switchButton').style.boxShadow = 'grey 0rem 0.3rem 1rem';

    }
        else {
            darkMod = false;
            document.querySelector('.game').style.backgroundColor = 'rgb(175, 175, 175)';
            document.querySelector('nav').style.backgroundColor = 'white';
            document.querySelector('.siteName').style.color = 'black';
            document.querySelector('.textPannel').style.backgroundColor = 'lightblue';
            document.querySelector('.textPannel').style.color = 'black';
            document.querySelector('.control').style.backgroundColor = 'lightgreen';
            document.querySelector('.control').style.color = 'black';
            document.querySelector('.toggleMod').style.color = 'black';
            document.querySelector('.switchButton').style.alignItems = 'flex-start';
            document.querySelector('.switchButton').style.boxShadow = '#999 0rem 0.3rem 1rem';
        }

}
