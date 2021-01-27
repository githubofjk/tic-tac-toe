const gameBoard = (() => {
    const boardArray = [];
    return {boardArray};
})();

const Player = (name) => {
    return {name};
}

const game = (() => {
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

    const newGame = () => {
        turnCounter = 0;

        gameBoard.boardArray.forEach((square, i) => {
            square = undefined;

            boardSquares[i].textContent = "";
        });   
    };

    const player1Name = () => {
        const player1 = Player(document.querySelector("#player1Name").value);
        return player1;
    };

    const player2Name = () => {
        const player2 = Player(document.querySelector("#player2Name").value);
        return player2;
    };

    return {turnCounter, checkWinner, newGame, player1Name, player2Name};
})();

function displayController(e) {
    console.log(game.turnCounter);
    
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
                displayWon.textContent = `${game.player1Name().name} won!`;
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
                displayWon.textContent = `${game.player2Name().name} won!`;
            }
            else {
                game.turnCounter++;
            }
        }
    }
}

const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayController));

const btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", game.newGame);
