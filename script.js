const boardCell = document.querySelectorAll('.gameBoardCell');
let boardData = ['', '', '', '', '', '', '', '', ''];
let turnIndex = 0;
class player{
    constructor(symbol, name, score, turn){
        this.symbol = symbol;
        this.name = name;
        this.score = score;
        this.turn = turn;
    }
}

function fillCellsOnBoard(){
    boardCell.forEach(boardCell => {
        boardCell.textContent = `${boardData[boardCell.attributes[0].value]}`;
    });
}

function fillBoardData(e) {
    if (!this.innerText) {
        turnIndex++;
        if (turnIndex % 2 === 0) {
        boardData[this.attributes[0].value] = 'X';
        } else {
        boardData[this.attributes[0].value] = 'O';
        }
    } else {
        console.log('not empty');
    }

    if (boardData[0] === 'X' && boardData[1] === boardData[0] && boardData[2] === boardData[0] ||
        boardData[3] === 'X' && boardData[4] === boardData[3] && boardData[5] === boardData[3] ||
        boardData[6] === 'X' && boardData[7] === boardData[6] && boardData[8] === boardData[6] ||
        boardData[0] === 'X' && boardData[3] === boardData[0] && boardData[6] === boardData[0] ||
        boardData[1] === 'X' && boardData[4] === boardData[1] && boardData[7] === boardData[1] ||
        boardData[2] === 'X' && boardData[5] === boardData[2] && boardData[8] === boardData[2] ||
        boardData[0] === 'X' && boardData[4] === boardData[0] && boardData[8] === boardData[0] ||
        boardData[2] === 'X' && boardData[4] === boardData[2] && boardData[6] === boardData[2]) {
        alert('X wins');
    } else if (boardData[0] === 'O' && boardData[1] === boardData[0] && boardData[2] === boardData[0] ||
        boardData[3] === 'O' && boardData[4] === boardData[3] && boardData[5] === boardData[3] ||
        boardData[6] === 'O' && boardData[7] === boardData[6] && boardData[8] === boardData[6] ||
        boardData[0] === 'O' && boardData[3] === boardData[0] && boardData[6] === boardData[0] ||
        boardData[1] === 'O' && boardData[4] === boardData[1] && boardData[7] === boardData[1] ||
        boardData[2] === 'O' && boardData[5] === boardData[2] && boardData[8] === boardData[2] ||
        boardData[0] === 'O' && boardData[4] === boardData[0] && boardData[8] === boardData[0] ||
        boardData[2] === 'O' && boardData[4] === boardData[2] && boardData[6] === boardData[2]) {
        alert('O wins');
    } else if (turnIndex === 9) {
        alert('Tie');
    }
    fillCellsOnBoard()
}

boardCell.forEach( boardCell => boardCell.addEventListener('click', fillBoardData))

console.log(boardData[0])