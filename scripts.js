const gameBoard = (() => {
    const boardArray = [];
    return {boardArray};
})();

const Player = (name) => {
    return {name};
}

const game = (() => {
    const player1 = Player("player1");
    const player2 = Player("player2");
    
    let turnCounter = 0;
    return {turnCounter};
})();

const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayController));

function displayController(e) {
    if (game.turnCounter % 2 === 0) {
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "X";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            game.turnCounter++;
        }  
    }
    else {
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "0";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            game.turnCounter++;
        }
    }
}
