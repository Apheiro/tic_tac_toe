const boardCell = document.querySelectorAll('.gameBoardCell');
const presentation = document.querySelector('#presentation');
const settings = document.querySelector('#settings');
const startBtn = document.querySelector('#startBtn');
const playGame = document.querySelector('#playGame');
const roundsNumber = document.querySelector('#roundsNumber');
const increaseRound = document.querySelector('#increaseRounds');
const decreaseRound = document.querySelector('#decreaseRounds');
const round = document.querySelector('#round');
const player1Name = document.querySelector('#player1Name');
const player2Name = document.querySelector('#player2Name');
const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
const gameOver = document.querySelector('#gameOver');
const gameOverResult = document.querySelector('#gameOverResult');
const playAgain = document.querySelector('#playAgain');
const backToMenuBtn = document.querySelector('#backToMenuBtn');
const btnRefresh = document.querySelector('#btnRefresh');
const btnConfig = document.querySelector('#btnConfig');

class player{
    constructor(symbol, name, score, turn){
        this.symbol = symbol;
        this.name = name;
        this.score = score;
        this.turn = turn;
    }
}

class game{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.maxRounds = 1;
        this.round = 1;
        this.boardData = ['', '', '', '', '', '', '', '', ''];
        this.turnIndex = 0;
    }

    fillCellsOnBoard(){
        boardCell.forEach(boardCell => {
            boardCell.innerText = `${gameSession.boardData[boardCell.attributes[0].value]}`;
        });
    }

    fillBoardData() { 
        if (!this.innerText) {
            gameSession.turnIndex++;
            this.classList.add('gameBoardCellAnimation');
            if (gameSession.turnIndex % 2 === 0) {
                gameSession.boardData[this.attributes[0].value] = player1.symbol;
                player1Name.classList.toggle('playersNameActive');
                player2Name.classList.toggle('playersNameActive');
            } else {
                gameSession.boardData[this.attributes[0].value] = player2.symbol;
                player1Name.classList.toggle('playersNameActive');
                player2Name.classList.toggle('playersNameActive');
            }
        }
        gameSession.fillCellsOnBoard();
        gameSession.gameResult();
    }

    gameResult() {
        if (gameSession.boardData[0] === 'X' && gameSession.boardData[1] === gameSession.boardData[0] && gameSession.boardData[2] === gameSession.boardData[0] ||
            gameSession.boardData[3] === 'X' && gameSession.boardData[4] === gameSession.boardData[3] && gameSession.boardData[5] === gameSession.boardData[3] ||
            gameSession.boardData[6] === 'X' && gameSession.boardData[7] === gameSession.boardData[6] && gameSession.boardData[8] === gameSession.boardData[6] ||
            gameSession.boardData[0] === 'X' && gameSession.boardData[3] === gameSession.boardData[0] && gameSession.boardData[6] === gameSession.boardData[0] ||
            gameSession.boardData[1] === 'X' && gameSession.boardData[4] === gameSession.boardData[1] && gameSession.boardData[7] === gameSession.boardData[1] ||
            gameSession.boardData[2] === 'X' && gameSession.boardData[5] === gameSession.boardData[2] && gameSession.boardData[8] === gameSession.boardData[2] ||
            gameSession.boardData[0] === 'X' && gameSession.boardData[4] === gameSession.boardData[0] && gameSession.boardData[8] === gameSession.boardData[0] ||
            gameSession.boardData[2] === 'X' && gameSession.boardData[4] === gameSession.boardData[2] && gameSession.boardData[6] === gameSession.boardData[2]) {
            if (player1.symbol === 'X') {
                player1.score++;
                round.textContent = `${player1.name} won!`;
                player1Score.innerText = player1.score;
            } else {
                player2.score++;
                round.textContent = `${player2.name} won!`;
                player2Score.innerText = player2.score;
            }
            gameSession.round++;
            boardCell.forEach(boardCell => {boardCell.style = 'pointer-events: none;'});
            setTimeout(() => { gameSession.resetRound(); }, 1000);
            setTimeout(() => {gameSession.gameOver();}, 1000);
        } else if (gameSession.boardData[0] === 'O' && gameSession.boardData[1] === gameSession.boardData[0] && gameSession.boardData[2] === gameSession.boardData[0] ||
            gameSession.boardData[3] === 'O' && gameSession.boardData[4] === gameSession.boardData[3] && gameSession.boardData[5] === gameSession.boardData[3] ||
            gameSession.boardData[6] === 'O' && gameSession.boardData[7] === gameSession.boardData[6] && gameSession.boardData[8] === gameSession.boardData[6] ||
            gameSession.boardData[0] === 'O' && gameSession.boardData[3] === gameSession.boardData[0] && gameSession.boardData[6] === gameSession.boardData[0] ||
            gameSession.boardData[1] === 'O' && gameSession.boardData[4] === gameSession.boardData[1] && gameSession.boardData[7] === gameSession.boardData[1] ||
            gameSession.boardData[2] === 'O' && gameSession.boardData[5] === gameSession.boardData[2] && gameSession.boardData[8] === gameSession.boardData[2] ||
            gameSession.boardData[0] === 'O' && gameSession.boardData[4] === gameSession.boardData[0] && gameSession.boardData[8] === gameSession.boardData[0] ||
            gameSession.boardData[2] === 'O' && gameSession.boardData[4] === gameSession.boardData[2] && gameSession.boardData[6] === gameSession.boardData[2]) {
            if (player1.symbol === 'O') {
                player1.score++;
                round.textContent = `${player1.name} won!`;
                player1Score.innerText = player1.score;
            } else {
                player2.score++;
                round.textContent = `${player2.name} won!`;
                player2Score.innerText = player2.score;
            }
            gameSession.round++;
            boardCell.forEach(boardCell => {boardCell.style = 'pointer-events: none;'});
            setTimeout(() => { gameSession.resetRound(); }, 1000);
            setTimeout(() => {gameSession.gameOver();}, 1000);
        } else if (gameSession.boardData.includes('') === false) {
            round.textContent = `It's a draw!`;
            gameSession.round++;
            boardCell.forEach(boardCell => {boardCell.style = 'pointer-events: none;'});
            setTimeout(() => { gameSession.resetRound(); }, 1000);
            setTimeout(() => {gameSession.gameOver();}, 1000);
        }  
    }

    gameOver() {
        if (gameSession.round > gameSession.maxRounds) {
            playGame.classList.toggle('animationFadeOut');
            setTimeout(() => {
                playGame.classList.toggle('animationFadeOut');
                playGame.classList.toggle('hidden')
                gameOver.classList.toggle('hidden')
            }, 490);
            
            if (player1.score > player2.score) {
                gameOverResult.textContent = `${player1.name} won!`;
            }
            else if (player1.score === player2.score) {
                gameOverResult.textContent = `It's a draw!`;
            }
            else { 
                gameOverResult.textContent = `${player2.name} won!`;
            };
        }
    }

    startGame() {
        const IA = document.querySelector('#IA');
        const startFirst = document.querySelector('#player1');
        const symbol = document.querySelector('#symbolO');
        const player1NameInput = document.querySelector('#player1NameInput').value;
        const player2NameInput = document.querySelector('#player2NameInput').value;

        if (startFirst.checked) {
            player1.turn = true;
            player2.turn = false;
            gameSession.turnIndex = 1;
            player1Name.classList.toggle('playersNameActive');
            player1Name.classList.add('playersNameActive');
            player2Name.classList.remove('playersNameActive');
        } else {
            player1.turn = false;
            player2.turn = true;
            gameSession.turnIndex = 0;
            player2Name.classList.add('playersNameActive');
            player1Name.classList.remove('playersNameActive');
        }

        if (IA.checked) {
            player2.name = 'IA';
        }

        if (symbol.checked) {
            player1.symbol = 'O';
            player2.symbol = 'X';
        } else {
            player1.symbol = 'X';
            player2.symbol = 'O';
        }

        if (player1NameInput !== "") { 
            player1.name = player1NameInput;
            player1Name.innerText = player1.name;
        } else {
            player1Name.innerText = player1.name;
        }

        if (player2NameInput !== "") {
            player2.name = player2NameInput;
            player2Name.innerText = player2.name;
        } else {
            player2Name.innerText = player2.name;
        }
    }

    resetRound() { 
        gameSession.boardData = ['', '', '', '', '', '', '', '', ''];
        gameSession.fillCellsOnBoard();
        round.innerText = `ROUND ${gameSession.round}`;
        if (player1.turn === true) { 
            gameSession.turnIndex = 1;
            player1Name.classList.toggle('playersNameActive');
            player2Name.classList.toggle('playersNameActive');
        } else {
            gameSession.turnIndex = 0;
            player1Name.classList.toggle('playersNameActive');
            player2Name.classList.toggle('playersNameActive');
        }
        boardCell.forEach(boardCell => {
            boardCell.classList.remove('gameBoardCellAnimation');
            boardCell.style = 'pointer-events: auto;';
        });
    }

    resetGame() {
        if (player1.turn === true) { 
            gameSession.turnIndex = 1;
        } else if (player2.turn === true) {
            gameSession.turnIndex = 0;
        }
        player1.score = 0;
        player2.score = 0;
        player1Score.innerText = player1.score;
        player2Score.innerText = player2.score;
        gameSession.round = 1;
        gameSession.boardData = ['', '', '', '', '', '', '', '', ''];
        gameSession.fillCellsOnBoard();
        round.innerText = `ROUND ${gameSession.round}`;
    }

}


const player1 = new player('X', 'Player-1', 0, true);
const player2 = new player('O', 'Player-2', 0, false);
const gameSession = new game(player1, player2);

presentation.onclick = () => {
    presentation.classList.toggle('animationFadeOut');
    setTimeout(() => {
        presentation.classList.toggle('animationFadeOut');
        presentation.classList.toggle('hidden');
        settings.classList.toggle('hidden');
    }, 490);
    
}
startBtn.onclick = () => {
    gameSession.startGame();
    settings.classList.toggle('animationFadeOut');
    setTimeout(() => {
        settings.classList.toggle('animationFadeOut');
        settings.classList.toggle('hidden');
        playGame.classList.toggle('hidden');
    }, 490);
}
playAgain.onclick = () => {
    gameOver.classList.toggle('animationFadeOut');
    setTimeout(() => {
        gameSession.resetGame();
        gameOver.classList.toggle('animationFadeOut');
        playGame.classList.toggle('hidden')
        gameOver.classList.toggle('hidden')
    }, 490);
}
backToMenuBtn.onclick = () => {
    gameOver.classList.toggle('animationFadeOut');
    setTimeout(() => {
        gameSession.resetGame();
        gameOver.classList.toggle('animationFadeOut');
        gameOver.classList.toggle('hidden')
        settings.classList.toggle('hidden')
    }, 490);
}
increaseRound.onclick = () => {
    if (gameSession.maxRounds < 9) { 
        gameSession.maxRounds++;
        roundsNumber.textContent = "0" + gameSession.maxRounds;
    } else {
        gameSession.maxRounds++;
        roundsNumber.textContent = gameSession.maxRounds;
    }
}
decreaseRound.onclick = () => {
    if (gameSession.maxRounds > 1 && gameSession.maxRounds < 11) { 
        gameSession.maxRounds--;
        roundsNumber.textContent = "0" + gameSession.maxRounds;
    } else if(gameSession.maxRounds > 1) {
        gameSession.maxRounds--;
        roundsNumber.textContent = gameSession.maxRounds;
    }
}
btnConfig.onclick = () => {
    playGame.classList.toggle('animationFadeOut');
    setTimeout(() => {
        gameSession.resetGame();
        playGame.classList.toggle('animationFadeOut');
        playGame.classList.toggle('hidden')
        settings.classList.toggle('hidden')
    }, 490);
}
btnRefresh.onclick = () => {
    
    gameSession.resetGame();
}

boardCell.forEach(boardCell => boardCell.onclick =  gameSession.fillBoardData);