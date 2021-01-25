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

    const checkWinner = () => {
        if (gameBoard.boardArray[0] !== undefined &&
            gameBoard.boardArray[0] === gameBoard.boardArray[1] &&
            gameBoard.boardArray[0] === gameBoard.boardArray[2] &&
            gameBoard.boardArray[1] === gameBoard.boardArray[2]) 
        {
            return true;
        }
    };

    return {player1, player2, turnCounter, checkWinner};
})();

const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayController));

function displayController(e) {
    const displayWon = document.querySelector("#won");
    
    // player1 or player2's turn
    if (game.turnCounter % 2 === 0) {
        // check if square already has a value
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "X";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            // check if won
            if (game.checkWinner()) {
                displayWon.textContent = `${game.player1.name} won!`;
            }
            // if didn't win, then next players turn
            else {
                game.turnCounter++;
            }
        }  
    }
    else {
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "0";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            if (game.checkWinner()) {
                displayWon.textContent = `${game.player2.name} won!`;
            }
            // if didn't win, then next players turn
            else {
                game.turnCounter++;
            }
        }
    }
}
