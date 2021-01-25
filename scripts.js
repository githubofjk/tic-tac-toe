const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayController));

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
        else if (gameBoard.boardArray[3] !== undefined &&
            gameBoard.boardArray[3] === gameBoard.boardArray[4] &&
            gameBoard.boardArray[3] === gameBoard.boardArray[5] &&
            gameBoard.boardArray[4] === gameBoard.boardArray[5])
        {
            return true;
        }
        else if (gameBoard.boardArray[6] !== undefined &&
            gameBoard.boardArray[6] === gameBoard.boardArray[7] &&
            gameBoard.boardArray[6] === gameBoard.boardArray[8] &&
            gameBoard.boardArray[7] === gameBoard.boardArray[8])
        {
            return true;
        }
        else if (gameBoard.boardArray[0] !== undefined &&
            gameBoard.boardArray[0] === gameBoard.boardArray[3] &&
            gameBoard.boardArray[0] === gameBoard.boardArray[6] &&
            gameBoard.boardArray[3] === gameBoard.boardArray[6])
        {
            return true;
        }
        else if (gameBoard.boardArray[1] !== undefined &&
            gameBoard.boardArray[1] === gameBoard.boardArray[4] &&
            gameBoard.boardArray[1] === gameBoard.boardArray[7] &&
            gameBoard.boardArray[4] === gameBoard.boardArray[7])
        {
            return true;
        }
        else if (gameBoard.boardArray[2] !== undefined &&
            gameBoard.boardArray[2] === gameBoard.boardArray[5] &&
            gameBoard.boardArray[2] === gameBoard.boardArray[8] &&
            gameBoard.boardArray[5] === gameBoard.boardArray[8])
        {
            return true;
        }
        else if (gameBoard.boardArray[0] !== undefined &&
            gameBoard.boardArray[0] === gameBoard.boardArray[4] &&
            gameBoard.boardArray[0] === gameBoard.boardArray[8] &&
            gameBoard.boardArray[4] === gameBoard.boardArray[8])
        {
            return true;
        }
        else if (gameBoard.boardArray[2] !== undefined &&
            gameBoard.boardArray[2] === gameBoard.boardArray[4] &&
            gameBoard.boardArray[2] === gameBoard.boardArray[6] &&
            gameBoard.boardArray[4] === gameBoard.boardArray[6])
        {
            return true;
        }
        else {
            return false;
        }
    };

    return {player1, player2, turnCounter, checkWinner};
})();

function displayController(e) {
    const displayWon = document.querySelector("#won");
    
    // Stop game if tied
    if (!game.checkWinner() && game.turnCounter >= 8) {
        displayWon.textContent = "Tied!";
    }

    // player1 or player2's turn
    if (game.turnCounter % 2 === 0) {
        // check if square already has a value
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "X";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            if (game.checkWinner()) {
                displayWon.textContent = `${game.player1.name} won!`;
            }
            // if didn't win, then next player turn
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
            else {
                game.turnCounter++;
            }
        }
    }
}
