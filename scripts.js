const gameBoard = (() => {
    const boardArray = [];
    for (i = 0; i < 9; i++) {
        boardArray[i] = "X";
    }
    return {boardArray};
})();

const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayGameBoard));


function displayGameBoard(e) {
    boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
}
